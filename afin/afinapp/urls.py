from django.urls import path
from . import views

#url configuration
urlpatterns = [
    #path('hello/', views.say_hello)
    path('events/', views.getEvents, name="events")
]