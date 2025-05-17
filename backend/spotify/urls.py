from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('artists/', views.artist_list, name='artist_list'),
    path('albums/', views.album_list, name='album_list'),
    path('tracks/', views.track_list, name='track_list'),
    path('tracks/<int:pk>/', views.track_detail, name='track_detail'),
    path('playlists/', views.playlist_list, name='playlist_list'),
    path('playlisttracks/', views.playlisttrack_list, name='playlisttrack_list'),
    path('likes/', views.like_list, name='like_list'),
    path('followers/', views.follower_list, name='follower_list'),
    path('premiums/', views.premium_list, name='premium_list'),
    path('userpremiums/', views.userpremium_list, name='userpremium_list'),
    path('payments/', views.payment_list, name='payment_list'),
    
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),

]
