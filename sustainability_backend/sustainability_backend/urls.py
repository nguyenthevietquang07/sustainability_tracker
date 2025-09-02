from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Sustainability Tracker!")

urlpatterns = [
    path('', home),  # Add this line for the root path
    path('admin/', admin.site.urls),
    path('api/', include('actions.urls')),  # Correct import path
]