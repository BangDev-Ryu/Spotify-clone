from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Track
from .serializer import TrackSerializer

# Create your views here.
@api_view(['GET'])
def get_tracks(request):
    tracks = Track.objects.all()
    serializer = TrackSerializer(tracks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)