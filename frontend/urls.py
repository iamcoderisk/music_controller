from django.urls import path
from . views import index 
urlpatterns = [
   
    path('',index),
    path('join',index),
    path('create',index)#pages would be linked to route later
]
