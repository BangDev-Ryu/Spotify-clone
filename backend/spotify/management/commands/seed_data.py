from django.core.management.base import BaseCommand
from spotify.models import User, Artist, Album, Track, Playlist, PlaylistTrack, Like, Follower, Premium, UserPremium, Payment
from datetime import date

class Command(BaseCommand):
    help = 'Load seed data into the database'

    def handle(self, *args, **kwargs):
        # Xóa dữ liệu cũ nếu cần
        User.objects.all().delete()
        Artist.objects.all().delete()
        Album.objects.all().delete()
        Track.objects.all().delete()
        Playlist.objects.all().delete()
        PlaylistTrack.objects.all().delete()
        Like.objects.all().delete()
        Follower.objects.all().delete()
        Premium.objects.all().delete()
        UserPremium.objects.all().delete()
        Payment.objects.all().delete()

        default_image = "/images/default-track.png"

        # Tạo dữ liệu mẫu cho bảng User
        users = [
            {"name": "John Doe", "email": "john@example.com", "password": "password123", "date_of_birth": "1990-01-01", "image": default_image, "user_type": "premium"},
            {"name": "Jane Smith", "email": "jane@example.com", "password": "password456", "date_of_birth": "1992-02-02", "image": default_image, "user_type": "free"},
            
        ]
        for user_data in users:
            User.objects.create(**user_data)

        # Tạo dữ liệu mẫu cho bảng Artist
        artists = [
            {"name": "Artist One", "genre": "Pop", "image_url": default_image},
            {"name": "Artist Two", "genre": "Rock", "image_url": default_image},
        ]
        for artist_data in artists:
            Artist.objects.create(**artist_data)

        artist_one = Artist.objects.get(name="Artist One")
        artist_two = Artist.objects.get(name="Artist Two")

        # Tạo dữ liệu mẫu cho bảng Album
        albums = [
            {"artist": artist_one, "name": "Album One", "release_date": "2020-01-01", "image": default_image},
            {"artist": artist_two, "name": "Album Two", "release_date": "2021-02-02", "image": default_image},
        ]
        for album_data in albums:
            Album.objects.create(**album_data)

        album_one = Album.objects.get(name="Album One")
        album_two = Album.objects.get(name="Album Two")

        # Tạo dữ liệu mẫu cho bảng Track
        tracks = [
            {"album": album_one, "name": "Song One", "duration": 210, "path": "/tracks/demo.mp3", "image": default_image},
            {"album": album_one, "name": "Song Two", "duration": 180, "path": "/tracks/demo.mp3", "image": default_image},
            {"album": album_two, "name": "Song Three", "duration": 240, "path": "/tracks/demo.mp3", "image": default_image},
        ]
        for track_data in tracks:
            Track.objects.create(**track_data)

        user_one = User.objects.get(email="john@example.com")
        user_two = User.objects.get(email="jane@example.com")

        # Tạo dữ liệu mẫu cho bảng Playlist
        playlists = [
            {"user": user_one, "name": "Playlist One", "description": "My favorite songs", "image": default_image},
            {"user": user_two, "name": "Playlist Two", "description": "Rock hits", "image": default_image},
        ]
        for playlist_data in playlists:
            Playlist.objects.create(**playlist_data)

        playlist_one = Playlist.objects.get(name="Playlist One")
        playlist_two = Playlist.objects.get(name="Playlist Two")

        playlist_tracks = [
            {"playlist": playlist_one, "track": Track.objects.get(name="Song One"), "order": 1},
            {"playlist": playlist_one, "track": Track.objects.get(name="Song Two"), "order": 2},
            {"playlist": playlist_two, "track": Track.objects.get(name="Song Three"), "order": 1},
        ]   
        for playlist_track_data in playlist_tracks:
            PlaylistTrack.objects.create(**playlist_track_data)

        likes = [
            {"user": user_one, "track": Track.objects.get(name="Song One"), "like_date": "2025-05-12T10:00:00"},
            {"user": user_two, "track": Track.objects.get(name="Song Two"), "like_date": "2025-05-13T11:00:00"},
        ]
        for like_data in likes:
            Like.objects.create(**like_data)

        followers = [
            {"user": user_one, "artist": artist_one},
            {"user": user_two, "artist": artist_two},
        ]
        for follower_data in followers:
            Follower.objects.create(**follower_data)

        premiums = [
            {"name": "Premium Plan 1"},
            {"name": "Premium Plan 2"},
        ]
        for premium_data in premiums:
            Premium.objects.create(**premium_data)

        user_premiums = [
            {"user": user_one, "premium": Premium.objects.get(name="Premium Plan 1"), "start_date": "2025-05-01", "end_date": "2026-05-01"},
            {"user": user_two, "premium": Premium.objects.get(name="Premium Plan 2"), "start_date": "2025-05-01", "end_date": "2026-05-01"},
        ]
        for user_premium_data in user_premiums:
            UserPremium.objects.create(**user_premium_data)

        payments = [
            {"user": user_one, "payment_method": "Credit Card", "payment_date": "2025-05-01", "amount": 99.99},
            {"user": user_two, "payment_method": "PayPal", "payment_date": "2025-05-02", "amount": 49.99},
        ]
        for payment_data in payments:
            Payment.objects.create(**payment_data)

        self.stdout.write(self.style.SUCCESS('Successfully loaded seed data into the database'))
