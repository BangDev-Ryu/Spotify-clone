from django.urls import path
from .views import get_tracks

urlpatterns = [
    path('track/', get_tracks, name='get_tracks'),
]