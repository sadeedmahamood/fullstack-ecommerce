from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from products.models import Product
from rest_framework.response import Response
from rest_framework import status


# =========================
# ADD TO CART
# =========================
@api_view(['POST'])
@permission_classes([IsAuthenticated])

def add_to_cart(request):

    user = request.user

    product_id = request.data.get('product_id')

    quantity = int(
        request.data.get('quantity', 1)
    )

    try:

        product = Product.objects.get(
            id=product_id
        )

    except Product.DoesNotExist:

        return Response(

            {'error': 'Product not found'},

            status=status.HTTP_404_NOT_FOUND
        )

    # GET OR CREATE CART
    cart, _ = Cart.objects.get_or_create(
        user=user
    )

    # CHECK IF ITEM EXISTS
    cart_item, item_created = CartItem.objects.get_or_create(

        cart=cart,
        product=product,

    )

    # UPDATE QUANTITY
    if not item_created:

        cart_item.quantity += quantity

    else:

        cart_item.quantity = quantity

    cart_item.save()

    return Response(

        {'message': 'Product added to cart'},

        status=status.HTTP_200_OK
    )


# =========================
# REMOVE FROM CART
# =========================
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])

def remove_from_cart(request):

    user = request.user

    product_id = request.data.get(
        'product_id'
    )

    try:

        cart = Cart.objects.get(
            user=user
        )

    except Cart.DoesNotExist:

        return Response(

            {'error': 'Cart not found'},

            status=status.HTTP_404_NOT_FOUND
        )

    try:

        cart_item = CartItem.objects.get(

            cart=cart,
            product_id=product_id

        )

    except CartItem.DoesNotExist:

        return Response(

            {'error': 'Item not found in cart'},

            status=status.HTTP_404_NOT_FOUND
        )

    cart_item.delete()

    return Response(

        {'message': 'Item removed from cart'},

        status=status.HTTP_200_OK
    )


# =========================
# UPDATE QUANTITY
# =========================
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])

def update_quantity(request):

    user = request.user

    product_id = request.data.get(
        'product_id'
    )

    action = request.data.get(
        'action'
    )

    try:

        cart = Cart.objects.get(
            user=user
        )

    except Cart.DoesNotExist:

        return Response(

            {'error': 'Cart not found'},

            status=status.HTTP_404_NOT_FOUND
        )

    try:

        cart_item = CartItem.objects.get(

            cart=cart,
            product_id=product_id

        )

    except CartItem.DoesNotExist:

        return Response(

            {'error': 'Item not found in cart'},

            status=status.HTTP_404_NOT_FOUND
        )

    # INCREASE
    if action == "increase":

        cart_item.quantity += 1

        cart_item.save()

    # DECREASE
    elif action == "decrease":

        if cart_item.quantity > 1:

            cart_item.quantity -= 1

            cart_item.save()

        else:

            cart_item.delete()

            return Response(

                {'message': 'Item removed'},

                status=status.HTTP_200_OK
            )

    else:

        return Response(

            {'error': 'Invalid action'},

            status=status.HTTP_400_BAD_REQUEST
        )

    return Response({

        'message': 'Cart updated',

        'quantity': cart_item.quantity

    }, status=status.HTTP_200_OK)


# =========================
# VIEW CART
# =========================
@api_view(['GET'])
@permission_classes([IsAuthenticated])

def view_cart(request):

    user = request.user

    try:

        cart = Cart.objects.get(
            user=user
        )

    except Cart.DoesNotExist:

        return Response({

            "items": [],
            "total_price": 0

        }, status=status.HTTP_200_OK)

    cart_items = CartItem.objects.filter(
        cart=cart
    )

    items_data = []

    total_price = 0

    for item in cart_items:

        product = item.product

        item_total = (
            product.price * item.quantity
        )

        total_price += item_total

        image_url = None

        if product.image:

            image_url = request.build_absolute_uri(
                product.image.url
            )

        items_data.append({

            "id": product.id,
            "name": product.name,
            "price": product.price,
            "quantity": item.quantity,
            "total": item_total,
            "image": image_url

        })

    return Response({

        "items": items_data,
        "total_price": total_price

    }, status=status.HTTP_200_OK)