# Docker | Django 🐳🚀

Run the **collectstatic** management command:

```bash
python manage.py collectstatic
```

Build the Docker container image

```bash
docker build -t <image_name | web> .
```

To see your image, you can run:

```bash
docker image list
```

To build and start your containers, run:

```bash
docker compose up --build
```

Test and access your application

```bash
docker compose run <container_name | web> python manage.py migrate
```

```bash
docker compose run <container_name | web> python manage.py createsuperuser
```

Run file `docker-compose.debug.yml`

```bash
docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```

## Author

Presented &copy; 2025 by [ZIN](https://github.com/zin-it-dev).
