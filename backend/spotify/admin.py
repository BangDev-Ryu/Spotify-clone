from django.contrib import admin
from .models import Track, Playlist, PlaylistTrack, User, Artist, Album, Like, Follower, Premium, UserPremium, Payment

# Register your models here.
admin.site.register(Track)
admin.site.register(Playlist)
admin.site.register(PlaylistTrack)
admin.site.register(User)
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Like)
admin.site.register(Follower)
admin.site.register(Premium)
admin.site.register(UserPremium)
admin.site.register(Payment)