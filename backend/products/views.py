# from django.shortcuts import render
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Product
# from rest_framework.generics import ListAPIView
# from .serializers import ProductSerializer
# from .filters import ProductFilter

# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.filters import SearchFilter, OrderingFilter

# from .models import Category
# from .serializers import CategorySerializer

# class ProductListView(ListAPIView):

#     permission_classes = [AllowAny]

#     queryset = Product.objects.all().select_related('category')
#     serializer_class = ProductSerializer

#     filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]

#     search_fields = ['name', 'description']

#     filterset_class = ProductFilter

#     ordering_fields = ['price', 'name']




# @api_view(['POST'])
# @permission_classes([IsAdminUser])
# def create_product(request):
#     serializer = ProductSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# # @api_view(['PUT'])
# # @permission_classes([IsAdminUser])
# # def update_product(request,pk):
# #     try:
# #         product = Product.objects.get(id = pk)
# #     except Product.DoesNotExist:
# #         return Response({"error" : "Product does not found"},status=status.HTTP_404_NOT_FOUND)

# #     serializer = ProductSerializer(product,data=request.data, partial=True)
# #     if serializer.is_valid():
# #         serializer.save()
# #         return Response(serializer.data, status=status.HTTP_200_OK)
# #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['DELETE'])
# @permission_classes([IsAdminUser])
# def delete_product(request, pk):
#     try:
#         product = Product.objects.get(id = pk)
#     except Product.DoesNotExist:
#         return Response({"error" : "product does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
#     product.delete()    
#     return Response({"message" : "product is deleted"}, status=status.HTTP_204_NO_CONTENT)



# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_single_product(request, pk):
#     try:
#         product = Product.objects.get(id=pk)
#     except Product.DoesNotExist:
#         return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

#     serializer = ProductSerializer(product)
#     return Response(serializer.data)

# @api_view(['PUT'])
# @permission_classes([IsAdminUser])
# def update_product(request, pk):

#     try:
#         product = Product.objects.get(id=pk)

#     except Product.DoesNotExist:

#         return Response(
#             {"error": "Product does not found"},
#             status=status.HTTP_404_NOT_FOUND
#         )

#     serializer = ProductSerializer(
#         product,
#         data=request.data,
#         partial=True
#     )

#     if serializer.is_valid():

#         serializer.save()

#         return Response(
#             serializer.data,
#             status=status.HTTP_200_OK
#         )

#     print("REQUEST DATA:", request.data)

#     print("SERIALIZER ERRORS:", serializer.errors)

#     return Response(
#         serializer.errors,
#         status=status.HTTP_400_BAD_REQUEST
#     )


# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_categories(request):

#     categories = Category.objects.all()

#     serializer = CategorySerializer(
#         categories,
#         many=True
#     )

#     return Response(serializer.data)




from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    AllowAny
)

from rest_framework.response import Response
from rest_framework import status

from rest_framework.generics import ListAPIView

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from .filters import ProductFilter


# =========================
# PRODUCT LIST VIEW
# =========================

class ProductListView(ListAPIView):

    permission_classes = [AllowAny]

    # queryset = Product.objects.all().select_related("category")
    queryset = Product.objects.all().select_related("category").order_by("-id")

    serializer_class = ProductSerializer

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter
    ]

    search_fields = [
        "name",
        "description"
    ]

    filterset_class = ProductFilter

    ordering_fields = [
        "price",
        "name"
    ]


# =========================
# CREATE PRODUCT
# =========================

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_product(request):

    print("REQUEST DATA:", request.data)

    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

    print("SERIALIZER ERRORS:", serializer.errors)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


# =========================
# DELETE PRODUCT
# =========================

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_product(request, pk):

    try:

        product = Product.objects.get(id=pk)

    except Product.DoesNotExist:

        return Response(
            {"error": "Product does not exist"},
            status=status.HTTP_404_NOT_FOUND
        )

    product.delete()

    return Response(
        {"message": "Product deleted successfully"},
        status=status.HTTP_204_NO_CONTENT
    )


# =========================
# GET SINGLE PRODUCT
# =========================

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_single_product(request, pk):

    try:

        product = Product.objects.get(id=pk)

    except Product.DoesNotExist:

        return Response(
            {"error": "Product not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = ProductSerializer(product)

    return Response(serializer.data)


# =========================
# UPDATE PRODUCT
# =========================

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_product(request, pk):

    try:

        product = Product.objects.get(id=pk)

    except Product.DoesNotExist:

        return Response(
            {"error": "Product does not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    print("UPDATE REQUEST DATA:", request.data)

    serializer = ProductSerializer(
        product,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():

        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )

    print("UPDATE SERIALIZER ERRORS:", serializer.errors)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


# =========================
# GET CATEGORIES
# =========================

@api_view(['GET'])
@permission_classes([AllowAny])
def get_categories(request):

    categories = Category.objects.all()

    serializer = CategorySerializer(
        categories,
        many=True
    )

    return Response(serializer.data)