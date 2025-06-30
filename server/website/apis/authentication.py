import firebase_admin.auth as auth

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.core.exceptions import ObjectDoesNotExist

from .models import User
from .utils import split_full_name

class FirebaseAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('Authorization')
        
        if not token:
            return None
        
        parts = token.split()
        if len(parts) != 2 or parts[0].lower() != 'bearer':
            return None
        
        access_token = parts[1]
        
        if self.oauth2_token(access_token):
            return None
        
        try:
            decoded_token = auth.verify_id_token(access_token)
    
            uid = decoded_token["uid"]
            email = decoded_token.get("email")
            name = decoded_token.get("name")
            photo_url = decoded_token.get("picture")
            
            first_name, last_name = split_full_name(name)
        except:
            raise AuthenticationFailed('Invalid Firebase token')
        
        try:
            user = User.objects.get(username=uid)
        except ObjectDoesNotExist:
            user = User.objects.create(
                                    username=uid, 
                                    email=email, 
                                    photo=photo_url, 
                                    first_name=first_name, 
                                    last_name=last_name
                                )
            
        return (user, None)
    
    def oauth2_token(self, token):
        return len(token.split(".")) != 3