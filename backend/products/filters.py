# import django_filters
# from .models import Product


# class ProductFilter(django_filters.FilterSet):

#     # CATEGORY FILTER
#     category = django_filters.CharFilter(
#         field_name='category__name',
#         lookup_expr='iexact'
#     )

#     # MIN PRICE
#     min_price = django_filters.NumberFilter(
#         field_name="price",
#         lookup_expr='gte'
#     )

#     # MAX PRICE
#     max_price = django_filters.NumberFilter(
#         field_name="price",
#         lookup_expr='lte'
#     )

#     class Meta:
#         model = Product
#         fields = ['category', 'min_price', 'max_price']


import django_filters

from .models import Product


class ProductFilter(
    django_filters.FilterSet
):

    # CATEGORY FILTER
    category = django_filters.CharFilter(
        field_name='category__name',
        lookup_expr='iexact'
    )

    # MIN PRICE FILTER
    min_price = django_filters.NumberFilter(
        field_name='price',
        lookup_expr='gte'
    )

    # MAX PRICE FILTER
    max_price = django_filters.NumberFilter(
        field_name='price',
        lookup_expr='lte'
    )

    class Meta:

        model = Product

        fields = [
            'category',
            'min_price',
            'max_price',
        ]