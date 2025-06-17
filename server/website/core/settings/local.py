from .base import *

ALLOWED_HOSTS = ['*']

INTERNAL_IPS = [
    "127.0.0.1"
]

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(os.path.join(BASE_DIR, 'database'), os.getenv('DB_NAME'))
    },
    'test': {
        'NAME': os.path.join(os.path.join(BASE_DIR, 'database'), f"test_{os.getenv('DB_NAME')}"),
    }
}

CORS_ORIGIN_ALLOW_ALL = True

MIDDLEWARE += [
    'corsheaders.middleware.CorsMiddleware'
]