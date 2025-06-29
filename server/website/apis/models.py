from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

from .sec_models import User, Role
from .mixins import SlugMixin, AuditMixin


class Specialization(AuditMixin, SlugMixin):
    name = models.CharField(unique=True, max_length=80)

    def __str__(self):
        return self.name


class Base(AuditMixin):
    specializations = models.ManyToManyField(
        Specialization,
        related_name="%(app_label)s_%(class)s_related",
        related_query_name="%(app_label)s_%(class)ss",
        blank=True
    )

    class Meta:
        abstract = True

    
class Patient(AuditMixin):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'patient'})
    
    address = models.TextField(blank=True)

    def __str__(self):
        return f"Dr. {self.user.get_full_name()}"
    

class Doctor(Base):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': Role.DOCTOR}
    )
    
    bio = RichTextUploadingField(null=True, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    fee = models.FloatField(default=0.00)
    
    def __str__(self):
        return f"Dr. {self.user.get_full_name()}"
    

class Medicine(AuditMixin):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.FloatField(default=0.00)
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.name