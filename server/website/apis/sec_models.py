from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser
from cloudinary_storage.storage import MediaCloudinaryStorage

from .mixins import SlugMixin


class Role(models.TextChoices):
    ADMIN = 'admin', 'Administrator'
    DOCTOR = 'doctor', 'Doctor'
    NURSE = 'nurse', 'Nurse'
    PATIENT = 'patient', 'Patient'


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not username or len(username) <= 0 : 
            raise ValueError("Users must have an username")
        
        if not email or len(email) <= 0 : 
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    
    def create_superuser(self, username, email, password=None):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )
        user.role = Role.ADMIN
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractUser, SlugMixin):
    email = models.EmailField(unique=True, max_length=125)
    avatar = models.ImageField(upload_to='avatars/%y/%m/%d', blank=True, storage=MediaCloudinaryStorage())
    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.PATIENT
    )
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.get_full_name() or self.username