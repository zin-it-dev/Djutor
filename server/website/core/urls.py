from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("apis.urls")),
    
    # Swagger
    path('open-api/', SpectacularAPIView.as_view(), name='swagger'),
    path('swagger/docs/', SpectacularSwaggerView.as_view(url_name='swagger'), name='docs'),
    path('swagger/redoc/', SpectacularRedocView.as_view(url_name='swagger'), name='redoc')
]
