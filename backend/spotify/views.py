from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, APIView 
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status

# from rest_framework import status
from .models import (
    User, 
    Artist, 
    Album, 
    Track, 
    Playlist, 
    PlaylistTrack, 
    Like, 
    Follower, 
    Premium, 
    UserPremium, 
    Payment
)

from .serializer import (
    RegisterSerializer,
    CustomerInfoSerializer ,
    ArtistSerializer,
    AlbumSerializer, 
    TrackSerializer, 
    PlaylistSerializer, 
    PlaylistTrackSerializer, 
    LikeSerializer, 
    FollowerSerializer, 
    PremiumSerializer, 
    UserPremiumSerializer, 
    PaymentSerializer, 
    UserSerializer,
    LoginWithEmailSerializer
)


# Create your views here.
# @api_view(['GET'])
# def get_tracks(request):
#     tracks = Track.objects.all()
#     serializer = TrackSerializer(tracks, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def artist_list(request):
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def album_list(request):
    albums = Album.objects.all()
    serializer = AlbumSerializer(albums, many=True)
    return Response(serializer.data)

########## track ##########
@api_view(['GET'])
def track_list(request):
    tracks = Track.objects.all()
    serializer = TrackSerializer(tracks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def track_detail(request, pk):
    try:
        track = Track.objects.get(track_id=pk)
        serializer = TrackSerializer(track)
        return Response(serializer.data)
    except Track.DoesNotExist:
        return Response(status=404)

@api_view(['GET'])
def playlist_list(request):
    playlists = Playlist.objects.all()
    serializer = PlaylistSerializer(playlists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def playlisttrack_list(request):
    playlist_tracks = PlaylistTrack.objects.all()
    serializer = PlaylistTrackSerializer(playlist_tracks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def like_list(request):
    likes = Like.objects.all()
    serializer = LikeSerializer(likes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def follower_list(request):
    followers = Follower.objects.all()
    serializer = FollowerSerializer(followers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def premium_list(request):
    premiums = Premium.objects.all()
    serializer = PremiumSerializer(premiums, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def userpremium_list(request):
    user_premiums = UserPremium.objects.all()
    serializer = UserPremiumSerializer(user_premiums, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def payment_list(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def register_view(request):
    print('register', request.data)
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['POST'])
def login_view(request):
    serializer = LoginWithEmailSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.validated_data['user']
        # Có thể trả về thông tin user hoặc token tuỳ ý
        return Response({"message": "Đăng nhập thành công", "email": user.email, "username": user.username})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)