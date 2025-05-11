from django.db import models

# Create your models here.
class Track(models.Model):
    name = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    duration = models.IntegerField()
    path = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name