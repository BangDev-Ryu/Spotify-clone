from django.urls import path
from . import views

urlpatterns = [
    path('users/', user_list, name='user_list'),
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
    path('users/<int:pk>/', user_detail, name='user_detail'),
    path('tracks/<int:pk>/', track_detail, name='track_detail'),
    path('payments/create/', create_payment, name='create_payment'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),

]
