from django.urls import path
from . import views
from .views import ProductListView

urlpatterns = [
    path('product/', ProductListView.as_view()),
    path('product/create/', views.create_product),
    path('product/update/<int:pk>/', views.update_product),
    path('product/delete/<int:pk>/', views.delete_product),
    path('product/<int:pk>/', views.get_single_product),
    path('product/categories/', views.get_categories),

]