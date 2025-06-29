from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.uploadedfile import UploadedFile

from .utils import cloudinary_uploader

def index(request):
    return HttpResponse("Welcome to Djutor eClinic !!!")


@csrf_exempt
def ckeditor_uploader(request):
    if request.method == 'POST' and request.FILES.get('upload'):
        file: UploadedFile = request.FILES['upload']
        result = cloudinary_uploader(file)
        return JsonResponse({'url': result})
    
    return JsonResponse({'error': 'File not found.'}, status=400)