from django.contrib import admin
from . models import Profile
# Register your models here.
class AdminProfile(admin.ModelAdmin):
    list_display = ['id','user', 'phone_number','country', 'created_at']
    search_fields = ['user']

admin.site.register(Profile, AdminProfile)
