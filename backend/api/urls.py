from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, UserViewSet, VehicleViewSet, ReservationViewSet, ReservationOptionViewSet, insert_fake_data_view

router = DefaultRouter()
router.register(r'user-profiles', UserProfileViewSet)
router.register(r'users', UserViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'reservations', ReservationViewSet)
router.register(r'reservation-options', ReservationOptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('fake_it/', insert_fake_data_view),
]
