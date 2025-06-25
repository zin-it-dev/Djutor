from django.contrib import admin

from .models import Doctor

class DoctorInline(admin.StackedInline):
    model = Doctor
    can_delete = False
    verbose_name_plural = "doctor"