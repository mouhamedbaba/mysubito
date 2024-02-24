from django.http import HttpResponse
from django.shortcuts import render

from rest_framework import viewsets

from fakerd import insert_fake_data
from .models import UserProfile, Vehicle, Reservation, ReservationOption
from .serializers import UserProfileSerializer, UserSerializer, VehicleSerializer, ReservationSerializer, ReservationOptionSerializer
from django.contrib.auth.models import User

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class ReservationOptionViewSet(viewsets.ModelViewSet):
    queryset = ReservationOption.objects.all()
    serializer_class = ReservationOptionSerializer
    
def insert_fake_data_view(request):
    insert_fake_data()
    return HttpResponse("Données fictives insérées avec succès !")

