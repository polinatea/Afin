# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AttendEvent(models.Model):
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    id_event = models.ForeignKey('Event', models.DO_NOTHING, db_column='id_event', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'attend_event'


class AttendedEvent(models.Model):
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    id_event = models.ForeignKey('Event', models.DO_NOTHING, db_column='id_event', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'attended_event'


class CreateEvent(models.Model):
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    id_event = models.ForeignKey('Event', models.DO_NOTHING, db_column='id_event', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'create_event'


class Event(models.Model):
    id_event = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=64)
    date = models.DateField()
    time = models.TimeField()
    address = models.CharField(max_length=128, blank=True, null=True)
    photo = models.CharField(max_length=64, blank=True, null=True)
    location_lat = models.DecimalField(max_digits=17, decimal_places=14, blank=True, null=True)
    location_lon = models.DecimalField(max_digits=17, decimal_places=14, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'event'


class HasInterest(models.Model):
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    id_interest = models.ForeignKey('Interest', models.DO_NOTHING, db_column='id_interest', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'has_interest'


class HasSkill(models.Model):
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    id_skill = models.ForeignKey('Skill', models.DO_NOTHING, db_column='id_skill', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'has_skill'


class Interest(models.Model):
    id_interest = models.AutoField(primary_key=True)
    interest_name = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'interest'


class Skill(models.Model):
    id_skill = models.AutoField(primary_key=True)
    skill_name = models.CharField(max_length=64)

    class Meta:
        managed = False
        db_table = 'skill'


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
