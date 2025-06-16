from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import User, Patient


@receiver(post_save, sender=User)
def create_profile_for_user(sender, instance, created, **kwargs):
    if created:
        # if instance.role == 'doctor':
        #     Doctor.objects.create(user=instance)
        # elif instance.role == 'nurse':
        #     Nurse.objects.create(user=instance)
        if instance.role == 'patient':
            Patient.objects.create(user=instance)
