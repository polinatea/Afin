# Generated by Django 4.1.3 on 2022-12-15 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id_user', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('surname', models.CharField(max_length=64)),
                ('age', models.IntegerField()),
                ('isadmin', models.IntegerField(db_column='isAdmin')),
                ('login', models.CharField(max_length=64)),
                ('password', models.CharField(max_length=64)),
            ],
            options={
                'db_table': 'user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id_event', models.AutoField(primary_key=True, serialize=False)),
                ('event_name', models.CharField(max_length=64)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('address', models.CharField(blank=True, max_length=128, null=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='images')),
                ('location_lat', models.DecimalField(blank=True, decimal_places=14, max_digits=17, null=True)),
                ('location_lon', models.DecimalField(blank=True, decimal_places=14, max_digits=17, null=True)),
            ],
        ),
    ]