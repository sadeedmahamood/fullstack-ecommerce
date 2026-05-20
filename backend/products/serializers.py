# from rest_framework import serializers
# from . models import Category, Product

# class CategorySerializer(serializers. ModelSerializer):
#     class Meta:
#         model = Category
#         fields = '__all__'

# class ProductSerializer(serializers. ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'

# from rest_framework import serializers
# from .models import Category, Product


# class CategorySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Category
#         fields = "__all__"


# class ProductSerializer(serializers.ModelSerializer):

#     category = CategorySerializer(read_only=True)

#     category_id = serializers.PrimaryKeyRelatedField(
#         queryset=Category.objects.all(),
#         source="category",
#         write_only=True
#     )

#     class Meta:
#         model = Product

#         fields = [
#             "id",
#             "name",
#             "description",
#             "price",
#             "stock",
#             "image",
#             "category",
#             "category_id",
#         ]



from rest_framework import serializers
from .models import Category, Product


# =========================
# CATEGORY SERIALIZER
# =========================


class CategorySerializer(serializers.ModelSerializer):

    product_count = serializers.SerializerMethodField()

    class Meta:

        model = Category

        fields = [
            "id",
            "name",
            "product_count",
        ]

    # COUNT PRODUCTS INSIDE CATEGORY
    def get_product_count(self, obj):

        return obj.product_set.count()


# =========================
# PRODUCT SERIALIZER
# =========================

class ProductSerializer(serializers.ModelSerializer):

    # SHOW FULL CATEGORY DATA
    category = CategorySerializer(
        read_only=True
    )

    # ACCEPT CATEGORY ID WHILE CREATING
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source="category",
        write_only=True
    )

    class Meta:

        model = Product

        fields = [

            "id",

            "name",

            "description",

            "price",

            "stock",

            "image",

            "category",

            "category_id",

        ]