from django.contrib import admin
from django.urls import include, path, re_path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/doc/', include('django.contrib.admindocs.urls')),
    path('admin/', admin.site.urls),
    path('', include("apis.urls")),

    # WYSIWYG
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')), 
    
    # Swagger
    path('open-api/', SpectacularAPIView.as_view(), name='swagger'),
    path('swagger/docs/', SpectacularSwaggerView.as_view(url_name='swagger'), name='docs'),
    path('swagger/redoc/', SpectacularRedocView.as_view(url_name='swagger'), name='redoc')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)