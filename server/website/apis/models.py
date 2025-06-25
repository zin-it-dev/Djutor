from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary_storage.storage import MediaCloudinaryStorage
from django.contrib import admin

class Role(models.TextChoices):
    ADMIN = 'admin', 'Administrator'
    DOCTOR = 'doctor', 'Doctor'
    NURSE = 'nurse', 'Nurse'
    PATIENT = 'patient', 'Patient'


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/%y/%m/%d', blank=True, storage=MediaCloudinaryStorage())
    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.PATIENT
    )
    
    @admin.display(
        description="Full Name",
    )
    def full_name(self):
        return self.get_full_name()
    
    def __str__(self):
        return self.username

    
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'patient'})
    
    address = models.TextField(blank=True)
    
    
class Doctor(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': Role.DOCTOR}
    )
    
    bio = models.TextField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    
    @admin.display(
        description="Full Name",
    )
    def full_name(self):
        return self.user.get_full_name()
    
    def __str__(self):
        return f"Dr. {self.user.get_full_name()}"
