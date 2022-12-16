from django.shortcuts import render
from .models import Event
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import EventSerializer

# Create your views here.

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    #many = True means that we want multiple objects
    # false means one object
    serializer = EventSerializer(events, many = True)
    return Response(serializer.data)