from rest_framework import viewsets, generics, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope


from .models import User, Doctor, Medicine
from .serializers import UserSerializer, DoctorSerializer, MedicineSerializer
from .repositories import DoctorRepository, MedicineRepository


class UserViewSet(viewsets.ViewSet, generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    
    @action(methods=['get'], url_path='current-user', url_name='current-user', detail=False)
    def current_user(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DoctorRepository().get_all()
    serializer_class = DoctorSerializer
    permission_classes = [permissions.AllowAny]
    

class MedicineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MedicineRepository().get_all()
    serializer_class = MedicineSerializer
    permission_classes = [permissions.AllowAny]