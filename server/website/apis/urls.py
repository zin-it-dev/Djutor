from django.urls import include, path, re_path
from rest_framework import routers
from oauth2_provider import urls as oauth2_urls

from . import apiviews

router = routers.DefaultRouter()

router.register(r'users', apiviews.UserViewSet, basename='user')
router.register(r'doctors', apiviews.DoctorViewSet, basename='doctor')

urlpatterns = [
    path("", include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
    # OAuth2
    re_path(r'^o/', include(oauth2_urls))
]