# Generated by Django 5.2.3 on 2025-06-30 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0006_user_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=125, null=True, unique=True),
        ),
    ]
