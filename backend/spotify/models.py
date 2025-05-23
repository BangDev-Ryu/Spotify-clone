from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('Email phải được cung cấp')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    date_of_birth = models.DateField()
    image = models.CharField(max_length=255, null=True, blank=True)
    user_type = models.CharField(max_length=10, default='free')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'date_of_birth']

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def name(self):
        return self.username

class Artist(models.Model):
    artist_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    image_url = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Album(models.Model):
    album_id = models.AutoField(primary_key=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)
    release_date = models.DateField()
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Track(models.Model):
    track_id = models.AutoField(primary_key=True)
    album = models.ForeignKey(Album, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=50)
    duration = models.IntegerField()
    path = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Playlist(models.Model):
    playlist_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class PlaylistTrack(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    order = models.IntegerField()

    def __str__(self):
        return f"Playlist {self.playlist.playlist_id} - Track {self.track.track_id} (Order {self.order})"

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    like_date = models.DateTimeField()

    def __str__(self):
        return f"{self.user.name} liked {self.track.name} on {self.like_date.strftime('%Y-%m-%d %H:%M:%S')}"

class Follower(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, null=True)

    class Meta:
        unique_together = ('user', 'artist')  # Đảm bảo một user chỉ follow một artist 1 lần

    def __str__(self):
        return f"{self.user.name} follows {self.artist.name}"

class Premium(models.Model):
    premium_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class UserPremium(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    premium = models.ForeignKey(Premium, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.user.name} - {self.premium.name} from {self.start_date} to {self.end_date}"

class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50)
    payment_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Payment {self.payment_id} by {self.user.name} on {self.payment_date.strftime('%Y-%m-%d')} for {self.amount} {self.payment_method}"
