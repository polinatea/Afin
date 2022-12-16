from django.db import models

# Create your models here.

class Event(models.Model):
    id_event = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=64)
    date = models.DateField()
    time = models.TimeField()
    address = models.CharField(max_length=128, blank=True, null=True)
    photo = models.ImageField(upload_to='images',blank=True, null=True)
    location_lat = models.DecimalField(max_digits=17, decimal_places=14, blank=True, null=True)
    location_lon = models.DecimalField(max_digits=17, decimal_places=14, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'event'

    # def __str__(self):
    #     return self.body[0:50],self.created

class User(models.Model):
    id_user = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    surname = models.CharField(max_length=64)
    age = models.IntegerField()
    isadmin = models.IntegerField(db_column='isAdmin')  # Field name made lowercase.
    login = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'user'