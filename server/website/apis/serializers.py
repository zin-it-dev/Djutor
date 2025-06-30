from rest_framework import serializers

from .sec_models import User
from .models import Doctor, Medicine


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'role', 'password', 'avatar', 'photo', 'first_name', 'last_name']
        extra_kwargs = {
            'password': {'write_only': True}, 
            'role': {'read_only': True}
        }
        
    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class DoctorSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Doctor
        fields = ['id', 'user', 'bio']
        
    
class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = ['slug', 'name', 'is_active']
        