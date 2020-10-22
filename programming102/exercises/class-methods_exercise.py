class Vehicle:
    def __init__(self, top_speed, acceleration):
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.position = 0
        self.speed = 0

    def move (self):
        self.accelerate()
        self.position += self.speed

    def accelerate (self): 
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed

# camero = Vehicle (100, 4)
# valvo = Vehicle (80, 6)

all_cars= {
    "camero": Vehicle (100, 4),
    "volvo": Vehicle (80, 6),
    "focus": Vehicle (60, 2),
    "fiat": Vehicle (120, 5)
}

print ("20 sec run")

for i in range(20):
    print (f"*********Second {i}*********")
    for car_name in all_cars:
        all_cars[car_name].move()

for car_name in all_cars:
    print (f"{car_name} - {all_cars[car_name].position}")




    ##only needed if used for delay
##import time

class Vehicle:
    def __init__(self, top_speed, acceleration, wheels = 4):
        self.wheels = wheels
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.position = 0
        self.speed = 0
        self.race_stats = []

    def move(self):
        self.accelerate()
        self.position += self.speed
        self.race_stats[-1].append({"speed":self.speed, "position":self.position})
    
    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed
    
    def reset(self):
        self.position = 0
        self.speed = 0

    def start_race(self):
        self.race_stats.append([])

all_cars = {
    "camero":Vehicle(100,4),
    "volvo":Vehicle(80,6),
    "focus":Vehicle(60,2),
    "fiat":Vehicle(120,5)
}

def run_race(seconds):

    for car_name in all_cars:
        all_cars[car_name].reset()
        all_cars[car_name].start_race()

    i = 0
    #for sec in range(time):
    while i < seconds:
        #print(f"Second {sec}")
        for car_name in all_cars:
            all_cars[car_name].move()
        i+=1
    print("Race is over!")
    
    #### delay for damatic effect####
    # for i in range(6):
    #     print("*"*i)
    #     time.sleep(.25)
    for car_name in all_cars:
        print(f" {car_name} - {all_cars[car_name].position}")

## Running the races ###
print("20 Second run!")
run_race(20)

print("40 Second run!")
run_race(40)

print("60 Second run!")
run_race(60)

print(all_cars["focus"].race_stats[0])

# for car_name in all_cars:
#     print(f" {car_name}:")
#     for i in range(len(all_cars[car_name].race_stats)):
#         print(all_cars[car_name].race_stats[i])