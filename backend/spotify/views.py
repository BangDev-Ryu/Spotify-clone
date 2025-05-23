from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, APIView 
from rest_framework.response import Response

from django.contrib.auth.models import User
from rest_framework import status

from datetime import date, timedelta

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
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def user_detail(request, pk):
    try:
        user = User.objects.get(user_id=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response(status=404)

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
        return Response({"message": "Đăng nhập thành công", "user_id": user.user_id, "email": user.email, "username": user.name, "user_type" : user.user_type})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_payment(request):
    user_id = request.data.get('user_id')
    payment_method = request.data.get('payment_method')
    amount = request.data.get('amount')
    
    try:
        user = User.objects.get(pk=user_id)
        # Lấy hoặc tạo Premium Plan mặc định
        premium, created = Premium.objects.get_or_create(name="Premium Plan 1")
        
        payment = Payment.objects.create(
            user=user,
            payment_method=payment_method,
            payment_date=date.today(),
            amount=amount
        )

        start_date = payment.payment_date
        end_date = start_date + timedelta(days=365) 
        
        UserPremium.objects.create(
            user=user,
            premium=premium,
            start_date=start_date,
            end_date=end_date
        )

        user.user_type = 'premium'
        user.save()

        return Response({
            'success': True, 
            'payment_id': payment.payment_id,
            'premium_start': start_date,
            'premium_end': end_date
        })
        
    except User.DoesNotExist:
        return Response({'success': False, 'error': 'User not found'}, status=404)
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e),
            'details': {
                'user_id': request.data.get('user_id'),
                'payment_method': request.data.get('payment_method'),
                'amount': request.data.get('amount')
            }
        }, status=400)

@api_view(['PUT', 'PATCH'])  
def update_user(request, pk):
    try:
        user = User.objects.get(user_id=pk)
        
        # Lấy dữ liệu hiện tại của user
        current_data = UserSerializer(user).data
        
        # Cập nhật với dữ liệu mới từ request
        for key, value in request.data.items():
            setattr(user, key, value)
            
        # Lưu vào database
        user.save()
        
        # Trả về dữ liệu đã cập nhật
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
