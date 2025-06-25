# Docker 🐳

Build the Docker container image

```bash
docker build -t <image_name | django-docker> .
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
docker compose run <container_name | server> python manage.py migrate
```

Run file `docker-compose.debug.yml`

```bash
docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```