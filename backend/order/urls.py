from django.urls import path
from . import views

urlpatterns = [
    # 🔥 Checkout
    path('checkout/', views.checkout, name='checkout'),

    # 🔥 Payment
    path('payment/verify/', views.verify_payment, name='verify_payment'),

    # 🔥 User Orders
    path('orders/', views.my_orders, name='my_orders'),
    path('cancel/<int:order_id>/', views.cancel_order, name='cancel_order'),
    path('order_detail/<int:order_id>/', views.order_detail),

    # 🔥 Admin Orders
    path('all_orders/', views.all_orders, name='all_orders'),
    path('update/<int:pk>/', views.update_order_status, name='update_order_status'),


]