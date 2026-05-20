from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializer import RegisterSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

# REGISTER
@api_view(['POST'])
@permission_classes([AllowAny])  
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            'message': 'user created',
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 
# LOGIN
@api_view(['POST'])
@permission_classes([AllowAny])

def login(request):

    username = request.data.get('username')

    password = request.data.get('password')

    user = authenticate(
        username=username,
        password=password
    )

    if user is None:

        return Response({

            'error': 'Invalid credentials'

        }, status=400)

    refresh = RefreshToken.for_user(user)

    return Response({

        'refresh': str(refresh),

        'access': str(
            refresh.access_token
        ),

        'is_admin': user.is_staff,

        'username': user.username,

    })