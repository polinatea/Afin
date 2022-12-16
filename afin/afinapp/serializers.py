from dataclasses import field, fields
from rest_framework import serializers
from .models import Event
from rest_framework.serializers import ModelSerializer

# from models import Event
# serialize every single attribute in model Note 
class EventSerializer(ModelSerializer):   
    class Meta:
        model = Event
        fields = '__all__'