from django.urls import include, path
from rest_framework import routers

from . import apiviews

router = routers.DefaultRouter()
router.register(r'users', apiviews.UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]