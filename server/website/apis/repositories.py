# Repository Pattern

from django.db import models
from django.core.exceptions import ObjectDoesNotExist

from .models import Medicine, Doctor

class BaseRepository:
    def __init__(self, model: models.Model):
        self.model = model

    def get_all(self):
        return self.model.objects.filter(is_active=True).order_by('created_on').all()

    def get_by_id(self, obj_id):
        try:
            return self.model.objects.get(id=obj_id)
        except ObjectDoesNotExist:
            return None

    def create(self, **kwargs):
        return self.model.objects.create(**kwargs)

    def update(self, obj_id, **kwargs):
        obj = self.get_by_id(obj_id)
        if obj:
            for key, value in kwargs.items():
                setattr(obj, key, value)
            obj.save()
            return obj
        return None

    def delete(self, obj_id):
        obj = self.get_by_id(obj_id)
        if obj:
            obj.delete()
            return True
        return False
    
    
class MedicineRepository(BaseRepository):
    def __init__(self):
        super().__init__(Medicine)
    

class DoctorRepository(BaseRepository):
    def __init__(self):
        super().__init__(Doctor)

    def get_latest_doctors(self, limit=10):
        return self.model.objects.filter(is_active=True).order_by('-created_on')[:limit]