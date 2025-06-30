from .base import *

ALLOWED_HOSTS = [
    "*"
]

INTERNAL_IPS = [
    "*"
]

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': f'django.db.backends.postgresql',
    #     'NAME': os.getenv('DATABASE_NAME'),
    #     'USER': os.getenv('DATABASE_USERNAME'),
    #     'PASSWORD': os.getenv('DATABASE_PASSWORD'),
    #     'HOST': os.getenv('DATABASE_HOST'),
    #     'PORT': os.getenv('DATABASE_PORT'),
    # }
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(os.path.join(BASE_DIR, 'database'), 'djutor.db')
    }
}

CORS_ORIGIN_ALLOW_ALL = True

MIDDLEWARE += [
    'corsheaders.middleware.CorsMiddleware'
]