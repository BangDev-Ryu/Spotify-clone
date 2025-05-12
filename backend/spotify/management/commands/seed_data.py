from django.core.management.base import BaseCommand
from spotify.models import Track  # Thay "your_app" bằng tên ứng dụng của bạn

class Command(BaseCommand):
    help = 'Load seed data into the database'

    def handle(self, *args, **kwargs):
        # Xóa dữ liệu cũ nếu cần
        Track.objects.all().delete()

        # Tạo dữ liệu mẫu cho bảng Track
        tracks = [
            {
                "track_id": 1,
                "album_id": 1,
                "name": "Song One",
                "duration": 210,
                "path": "/tracks/demo.mp3",
                "image": "/images/default-track.png"
            },
            {
                "track_id": 2,
                "album_id": 1,
                "name": "Song Two",
                "duration": 180,
                "path": "/tracks/demo.mp3",
                "image": "/images/default-track.png"
            },
            {
                "track_id": 3,
                "album_id": 2,
                "name": "Song Three",
                "duration": 240,
                "path": "/tracks/demo.mp3",
                "image": "/images/default-track.png"
            },
        ]

        # Lưu dữ liệu vào cơ sở dữ liệu
        for track_data in tracks:
            Track.objects.create(**track_data)

        self.stdout.write(self.style.SUCCESS('Successfully loaded seed data into Track'))
