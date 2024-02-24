from rest_framework import serializers
from .models import UserProfile, Vehicle, Reservation, ReservationOption
from django.contrib.auth.models import User

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'address', 'phone_number')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ('id', 'model', 'year', 'fuel_type', 'price_per_day', 'availability', 'image')

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ('id', 'user', 'vehicle', 'start_date', 'end_date', 'status')

class ReservationOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservationOption
        fields = ('id', 'reservation', 'option', 'extra_price')



# creation api