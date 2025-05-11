from django.db import models

class Track(models.Model):
    track_id = models.AutoField(primary_key=True)  # tự động tạo track_id
    album_id = models.IntegerField(null=True)  # Cho phép giá trị null cho album_id
    name = models.CharField(max_length=50)
    duration = models.IntegerField()
    path = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

class Album(models.Model):
    album_id = models.AutoField(primary_key=True)
    artist_id = models.IntegerField()
    name = models.CharField(max_length=50)
    release_date = models.DateField()
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name
