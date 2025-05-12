# Spotify-clone

## Backend: Django

### Qua thư backend
```
cd backend
```
### Tạo biến môi trường ảo và cài đặt các gói yêu cầu
```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```
### Migrate và chạy server
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Frontend: React + Vite
```
cd frontend 
npm install
npm run dev
```
