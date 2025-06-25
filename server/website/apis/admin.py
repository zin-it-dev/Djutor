from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import Doctor, User
from .forms import UserChangeForm, UserCreationForm
from .inlines import DoctorInline

    
class UserAdmin(BaseUserAdmin):
    inlines = [DoctorInline]
    form = UserChangeForm
    add_form = UserCreationForm
    
    list_display = ["full_name", "email", "username", "role"]
    fieldsets = [
        (None, {"fields": ["username", "email", "password"]}),
        ("Personal info", {"fields": ["first_name"]}),
        ("Permissions", {"fields": ["role"]}),
    ]
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "username", "password", "confirm_password", "role"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = []
    
    
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'bio', 'phone']

    def has_add_permission(self, request):
        return False
    
admin.site.register(User, UserAdmin)
admin.site.register(Doctor, DoctorAdmin)