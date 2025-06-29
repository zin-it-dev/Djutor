from django.contrib import admin

from .models import Doctor, Patient

class DoctorInline(admin.StackedInline):
    model = Doctor
    can_delete = False
    verbose_name_plural = "doctor"
    fk_name = 'user'
    
    
class PatientInline(admin.StackedInline):
    model = Patient
    can_delete = False
    verbose_name_plural = "patient"
    fk_name = 'user'