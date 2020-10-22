class Vehicle:
 
    def __init__(self, category, wheels = 4):
        self.category = category
        self.wheels = wheels
    


sports = Vehicle("Sports")
truck = Vehicle("Truck")
minivan = Vehicle("Minivan")
motorcycle = Vehicle("Motorcycle", 2)

print (sports.category, sports.wheels)
print (truck.category, truck.wheels)
print (minivan.category, minivan.wheels)
print (motorcycle.category, motorcycle.wheels)