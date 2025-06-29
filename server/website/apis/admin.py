from django.contrib import admin

from .sec_models import User
from .models import Doctor, Patient
from .sec import UserAdmin
from .forms import DoctorForm
from .mixins import RestrictedAdminMixin


class DoctorAdmin(RestrictedAdminMixin, admin.ModelAdmin):
    list_display = ['user', 'bio', 'phone']
        

class PatientAdmin(RestrictedAdminMixin, admin.ModelAdmin):
    form = DoctorForm
    
    list_display = ['user', 'address']

    
admin.site.register(User, UserAdmin)
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Patient, PatientAdmin)