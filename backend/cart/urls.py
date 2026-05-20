from django.urls import path
from . import views

urlpatterns = [

    path(
        'add/',
        views.add_to_cart
    ),

    path(
        'remove/',
        views.remove_from_cart
    ),

    path(
        'update/',
        views.update_quantity
    ),

    path(
        'view/',
        views.view_cart
    ),

]