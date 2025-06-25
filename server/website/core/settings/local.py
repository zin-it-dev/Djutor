from .base import *

ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS","127.0.0.1").split(",")

INTERNAL_IPS = os.environ.get("DJANGO_INTERNAL_IPS","127.0.0.1").split(",")

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

SQLITE_PATH = os.path.join(os.path.join(BASE_DIR, 'database'), os.getenv('DATABASE_NAME'))

# DATABASES = {
#     'default': {
#         'ENGINE': f'django.db.backends.{os.getenv('DATABASE_ENGINE', 'sqlite3')}',
#         'NAME': os.getenv('DATABASE_NAME', SQLITE_PATH),
#         'USER': os.getenv('DATABASE_USERNAME', 'postgres'),
#         'PASSWORD': os.getenv('DATABASE_PASSWORD', '12345678'),
#         'HOST': os.getenv('DATABASE_HOST', '127.0.0.1'),
#         'PORT': os.getenv('DATABASE_PORT', 5432),
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': f'django.db.backends.sqlite3',
        'NAME': SQLITE_PATH,
    }
}

CORS_ORIGIN_ALLOW_ALL = True

MIDDLEWARE += [
    'corsheaders.middleware.CorsMiddleware'
]