# urls.py
from django.urls import path
from .views import artist_list, album_list, track_list, playlist_list, playlisttrack_list, like_list, follower_list, premium_list, userpremium_list, payment_list

urlpatterns = [
    path('users/', artist_list, name='artist_list'),
    path('artists/', artist_list, name='artist_list'),
    path('albums/', album_list, name='album_list'),
    path('tracks/', track_list, name='track_list'),
    path('playlists/', playlist_list, name='playlist_list'),
    path('playlisttracks/', playlisttrack_list, name='playlisttrack_list'),
    path('likes/', like_list, name='like_list'),
    path('followers/', follower_list, name='follower_list'),
    path('premiums/', premium_list, name='premium_list'),
    path('userpremiums/', userpremium_list, name='userpremium_list'),
    path('payments/', payment_list, name='payment_list'),
]
