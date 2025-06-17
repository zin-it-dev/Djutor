from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary_storage.storage import MediaCloudinaryStorage

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
    
    def __str__(self):
        return self.email

    
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'patient'})
    
    address = models.TextField(blank=True)