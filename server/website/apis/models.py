from django.db import models
from django.contrib.auth.models import AbstractUser


class Role(models.TextChoices):
    ADMIN = 'admin', 'Administrator'
    DOCTOR = 'doctor', 'Doctor'
    NURSE = 'nurse', 'Nurse'
    PATIENT = 'patient', 'Patient'


class User(AbstractUser):
    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.PATIENT
    )
    
    def __str__(self):
        return f"{self.username} ({self.role})"

    
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'patient'})
    
    address = models.TextField(blank=True)