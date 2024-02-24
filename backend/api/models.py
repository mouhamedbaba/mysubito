from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

class Vehicle(models.Model):
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    fuel_type = models.CharField(max_length=50)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.BooleanField(default=True)
    image = models.ImageField(upload_to='vehicle_images/', null=True, blank=True) 
    
    def __str__(self):
        return self.model
    

class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20) 
    
    def __str__(self):
        return self.user.username
    

class ReservationOption(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    option = models.CharField(max_length=100)
    extra_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.option
