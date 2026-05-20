# from django.shortcuts import render
# from rest_framework import status
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated, IsAdminUser
# from .models import Order, OrderItem
# from cart.models import Cart, CartItem
# from rest_framework.response import Response
# from django.conf import settings
# import razorpay


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def checkout(request):
#     user = request.user

#     address_line = request.data.get('address_line')
#     city = request.data.get('city')
#     state = request.data.get('state')
#     pincode = request.data.get('pincode')
#     country = request.data.get('country')

#     # ✅ Validate address
#     if not all([address_line, city, state, pincode, country]):
#         return Response({'error': 'All address fields are required'}, status=status.HTTP_400_BAD_REQUEST)

#     # ✅ Get cart
#     try:
#         cart = Cart.objects.get(user=user)
#     except Cart.DoesNotExist:
#         return Response({"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND)

#     cart_items = CartItem.objects.filter(cart=cart)

#     if not cart_items.exists():
#         return Response({'error': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)

#     # ✅ Calculate total
#     total_price = sum(item.product.price * item.quantity for item in cart_items)

#     # ✅ Create Order
#     order = Order.objects.create(
#         user=user,
#         total_price=total_price,
#         address_line=address_line,
#         city=city,
#         state=state,
#         pincode=pincode,
#         country=country,
#     )

#     # ✅ Create Order Items
#     for item in cart_items:
#         OrderItem.objects.create(
#             order=order,
#             product=item.product,
#             quantity=item.quantity,
#             price=item.product.price,
#         )

#     # ✅ Razorpay Integration
#     try:
#         client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

#         payment = client.order.create({
#             "amount": int(total_price * 100),
#             "currency": "INR",
#             "payment_capture": 1
#         })

#         # Save Razorpay Order ID
#         order.payment_id = payment['id']

#     except Exception as e:
#         return Response({
#             "error": "Payment gateway error",
#             "details": str(e)
#         }, status=500)

#     # ✅ 🔥 SIMULATE PAYMENT SUCCESS (IMPORTANT PART)
#     order.is_paid = True
#     order.status = 'C'
#     order.save()

#     # ✅ Clear cart after order
#     cart_items.delete()

#     return Response({
#         "message": "Order placed successfully (Payment simulated)",
#         "order_id": order.id,
#         "razorpay_order_id": order.payment_id,
#         "amount": int(total_price * 100)
#     }, status=status.HTTP_201_CREATED)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def my_orders(request):
#     user = request.user

#     orders = Order.objects.filter(user=user).order_by('-created_at')

#     data = []

#     for order in orders:
#         items = []
#         for item in order.items.all():
#             items.append({
#                 "product": item.product.name,
#                 "quantity": item.quantity,
#                 "price": item.price
#             })

#         data.append({
#             "order_id": order.id,
#             "total_price": order.total_price,
#             "status": order.status,
#             "is_paid": order.is_paid,
#             "created_at": order.created_at,
#             "items": items
#         })

#     return Response(data)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def cancel_order(request, order_id):
#     user = request.user

#     try:
#         order = Order.objects.get(id=order_id, user=user)
#     except Order.DoesNotExist:
#         return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)

#     # ✅ Only pending orders can be cancelled
#     if order.status != 'P':
#         return Response({"error": "Only pending orders can be cancelled"}, status=status.HTTP_400_BAD_REQUEST)

#     order.status = 'X'
#     order.save()

#     return Response({"message": "Order cancelled successfully"}, status=status.HTTP_200_OK)

# @api_view(['GET'])
# @permission_classes([IsAdminUser])
# def all_orders(request):
#     orders = Order.objects.all().order_by('-created_at')

#     data = []

#     for order in orders:
#         items = []  # ✅ create separate list

#         for item in order.items.all():
#             items.append({
#                 "product": item.product.name,
#                 "quantity": item.quantity,
#                 "price": item.price
#             })

#         data.append({
#             "order_id": order.id,
#             "user": order.user.username,
#             "total_price": order.total_price,
#             "status": order.status,
#             "is_paid": order.is_paid,
#             "created_at": order.created_at,
#             "items": items   # ✅ correct
#         })

#     return Response(data)

# @api_view(['PATCH'])
# @permission_classes([IsAdminUser])
# def update_order_status(request, pk):
#     try:
#         order = Order.objects.get(id=pk)
#     except Order.DoesNotExist:
#         return Response({'error':'Order not found'}, status=status.HTTP_404_NOT_FOUND)
    
#     new_status = request.data.get('status')

#     if new_status not in ['P', 'C', 'X']:
#         return Response({'error' : 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

#     order.status = new_status

#     if new_status == 'C':
#         order.is_paid = True

#     order.save()

#     return Response({'message':'Order status updated'})



from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.conf import settings
import razorpay

from .models import Order, OrderItem
from cart.models import Cart, CartItem


# 🔥 CHECKOUT (CREATE ORDER + RAZORPAY ORDER)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def checkout(request):
    user = request.user

    address_line = request.data.get('address_line')
    city = request.data.get('city')
    state = request.data.get('state')
    pincode = request.data.get('pincode')
    country = request.data.get('country')

    if not all([address_line, city, state, pincode, country]):
        return Response({'error': 'All address fields are required'}, status=400)

    try:
        cart = Cart.objects.get(user=user)
    except Cart.DoesNotExist:
        return Response({'error': 'Cart not found'}, status=404)

    cart_items = CartItem.objects.filter(cart=cart)

    if not cart_items.exists():
        return Response({'error': 'Cart is empty'}, status=400)

    # ✅ Calculate total safely
    total_price = sum(item.product.price * item.quantity for item in cart_items)

    # ✅ Create Order (NOT PAID)
    order = Order.objects.create(
        user=user,
        total_price=total_price,
        address_line=address_line,
        city=city,
        state=state,
        pincode=pincode,
        country=country,
    )

    # ✅ Create Order Items
    for item in cart_items:
        OrderItem.objects.create(
            order=order,
            product=item.product,
            quantity=item.quantity,
            price=item.product.price,
        )

    # ✅ Razorpay Order Creation
    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

    payment = client.order.create({
        "amount": int(total_price * 100),
        "currency": "INR",
        "payment_capture": 1
    })

    # ✅ Save Razorpay Order ID
    order.razorpay_order_id = payment['id']
    order.save()

    return Response({
        "order_id": order.id,
        "razorpay_order_id": payment['id'],
        "amount": int(total_price * 100),
        "key": settings.RAZORPAY_KEY_ID
    }, status=200)


# 🔥 VERIFY PAYMENT (CORE SECURITY)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_payment(request):
    user = request.user

    razorpay_order_id = request.data.get('razorpay_order_id')
    razorpay_payment_id = request.data.get('razorpay_payment_id')
    razorpay_signature = request.data.get('razorpay_signature')

    try:
        order = Order.objects.get(razorpay_order_id=razorpay_order_id, user=user)
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=404)

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

    try:
        client.utility.verify_payment_signature({
            'razorpay_order_id': razorpay_order_id,
            'razorpay_payment_id': razorpay_payment_id,
            'razorpay_signature': razorpay_signature
        })

        # ✅ Mark success ONLY here
        order.is_paid = True
        order.status = 'C'
        order.razorpay_payment_id = razorpay_payment_id
        order.razorpay_signature = razorpay_signature
        order.save()

        # ✅ Clear cart AFTER success
        CartItem.objects.filter(cart__user=user).delete()

        return Response({'message': 'Payment successful'})

    except:
        return Response({'error': 'Payment verification failed'}, status=400)


# 🔥 USER: VIEW MY ORDERS
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_orders(request):
    user = request.user

    orders = Order.objects.filter(user=user).order_by('-created_at')

    data = []

    for order in orders:
        items = []
        for item in order.items.all():
            items.append({
                "product": item.product.name,
                "quantity": item.quantity,
                "price": item.price
            })

        data.append({
            "order_id": order.id,
            "total_price": order.total_price,
            "status": order.status,
            "is_paid": order.is_paid,
            "created_at": order.created_at,
            "items": items
        })

    return Response(data)


# 🔥 USER: CANCEL ORDER
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def cancel_order(request, order_id):
    user = request.user

    try:
        order = Order.objects.get(id=order_id, user=user)
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=404)

    if order.status != 'P':
        return Response({'error': 'Only pending orders can be cancelled'}, status=400)

    order.status = 'X'
    order.save()

    return Response({'message': 'Order cancelled successfully'})


# 🔥 ADMIN: VIEW ALL ORDERS
@api_view(['GET'])
@permission_classes([IsAdminUser])
def all_orders(request):
    orders = Order.objects.all().order_by('-created_at')

    data = []

    for order in orders:
        items = []
        for item in order.items.all():
            items.append({
                "product": item.product.name,
                "quantity": item.quantity,
                "price": item.price
            })

        data.append({
            "order_id": order.id,
            "user": order.user.username,
            "total_price": order.total_price,
            "status": order.status,
            "is_paid": order.is_paid,
            "created_at": order.created_at,
            "items": items
        })

    return Response(data)


# 🔥 ADMIN: UPDATE STATUS
@api_view(['PATCH'])
@permission_classes([IsAdminUser])
def update_order_status(request, pk):
    try:
        order = Order.objects.get(id=pk)
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=404)

    new_status = request.data.get('status')

    if new_status not in ['P', 'C', 'X']:
        return Response({'error': 'Invalid status'}, status=400)

    if order.status == 'X':
        return Response({'error': 'Cancelled order cannot be updated'}, status=400)

    order.status = new_status

    if new_status == 'C':
        order.is_paid = True

    order.save()

    return Response({'message': 'Order status updated'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def order_detail(request, order_id):
    user = request.user

    try:
        order = Order.objects.get(id=order_id, user=user)
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=404)

    items = []
    for item in order.items.all():   # ✅ matches your related_name
        items.append({
            "product": item.product.name,
            "quantity": item.quantity,
            "price": item.price,
            "total": item.quantity * item.price
        })

    data = {
        "order_id": order.id,
        "user": order.user.username,
        "total_price": order.total_price,
        "status": order.status,
        "is_paid": order.is_paid,

        # 🔥 Razorpay fields (you are already storing these)
        "razorpay_order_id": order.razorpay_order_id,
        "razorpay_payment_id": order.razorpay_payment_id,
        "razorpay_signature": order.razorpay_signature,

        # 📍 Address (matches your checkout fields)
        "address": {
            "address_line": order.address_line,
            "city": order.city,
            "state": order.state,
            "pincode": order.pincode,
            "country": order.country,
        },

        "items": items,
        "created_at": order.created_at
    }

    return Response(data, status=200)