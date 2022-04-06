import phonenumbers
from mynumber import number
from phonenumbers import geocoder
from phonenumbers import carrier
from opencage.geocoder import OpenCageGeocode
import folium

omarNumber = phonenumbers.parse(number)
yourlocation = geocoder.description_for_number(omarNumber,"en")
key = "30e04c5fa2344249b65f4c51a88e93f6"

print (yourlocation)

service_provider = phonenumbers.parse(number)
print(carrier.name_for_number(service_provider, "en"))

geocoder = OpenCageGeocode(key)
query = str(yourlocation)

results = geocoder.geocode(query)

lat = results[0]["geometry"]["lat"]
lng = results[0]["geometry"]["lng"]

print(lat,lng)

myMap = folium.Map(location = [lat ,lng],zoom_start=9)

folium.Marker([lat,lng], popup= yourlocation).add_to((myMap))
myMap.save("myLocation.html")