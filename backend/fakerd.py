# Dans insert_data_script.py

from datetime import timedelta
import os
import django
import random
from faker import Faker
from django.contrib.auth.models import User
from api.models import UserProfile, Vehicle, Reservation, ReservationOption

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'votre_projet.settings')
django.setup()

fake = Faker()

# Fonction pour insérer des données fictives
def insert_fake_data():
    create_users(50)  # Créer 10 utilisateurs fictifs
    # create_user_profiles(50)  # Créer 10 profils d'utilisateurs fictifs
    create_vehicles(50)  # Créer 20 véhicules fictifs
    create_reservations(30)  # Créer 30 réservations fictives

# Fonctions pour créer des données fictives (à partir de l'exemple précédent)
# Assurez-vous de les inclure ici

# [...]

def create_users(num_users):
    for _ in range(num_users):
        username = fake.user_name()
        email = fake.email()
        password = fake.password()
        User.objects.create_user(username=username, email=email, password=password)

# Fonction pour créer des profils d'utilisateurs fictifs
# def create_user_profiles(num_profiles):
#     for i in range(1, num_profiles):
#         user = i
#         address = fake.address()
#         phone_number = fake.phone_number()
#         UserProfile.objects.create(user=user, address=address, phone_number=phone_number)

# Fonction pour créer des véhicules fictifs
def create_vehicles(num_vehicles):
    for _ in range(num_vehicles):
        model = fake.company()
        year = random.randint(2000, 2022)
        fuel_type = random.choice(['Essence', 'Diesel', 'Hybride'])
        price_per_day = round(random.uniform(20.00, 200.00), 2)
        availability = random.choice([True, False])
        Vehicle.objects.create(model=model, year=year, fuel_type=fuel_type, price_per_day=price_per_day, availability=availability)

# Fonction pour créer des réservations fictives
def create_reservations(num_reservations):
    for _ in range(num_reservations):
        user = random.choice(User.objects.all())
        vehicle = random.choice(Vehicle.objects.filter(availability=True))
        start_date = fake.date_time_between(start_date='-30d', end_date='+30d')
        end_date = fake.date_time_between_dates(datetime_start=start_date, datetime_end=start_date + timedelta(days=random.randint(1, 10)))
        status = random.choice(['En attente', 'Confirmée', 'Annulée'])
        reservation = Reservation.objects.create(user=user, vehicle=vehicle, start_date=start_date, end_date=end_date, status=status)
        
        # Ajouter des options de réservation fictives
        num_options = random.randint(0, 3)
        for _ in range(num_options):
            option = random.choice(['Assurance', 'GPS', 'Siège enfant'])
            extra_price = round(random.uniform(5.00, 50.00), 2)
            ReservationOption.objects.create(reservation=reservation, option=option, extra_price=extra_price)
