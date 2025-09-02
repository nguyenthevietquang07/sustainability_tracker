from django.shortcuts import render

from rest_framework import viewsets
from .models import Action
from .serializers import ActionSerializer

class ActionViewSet(viewsets.ModelViewSet):
    queryset = Action.objects.all().order_by('-date')  # Newest first
    serializer_class = ActionSerializer