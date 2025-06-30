import pytest

from ..models import Medicine

@pytest.mark.django_db
def test_medicine_creation():
    instance = Medicine.objects.create(name="Vitamin C")
    assert instance.name == "No"