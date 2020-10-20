people = [
    ["sho", "uddin", "30" ], 
    ["aaliya", "29"]
]


coordinates= [
    [10,10],
    [20,10],
    [10,20]
]

print (people[0])
print (people[0][2])

people[0][2] = 39

more_people= [
    ["sho", "uddin", 30 ], 
    ["aaliya","uddin", 29],
    ["ameera","uddin", 4],
    ["ayaz","uddin", 1]
]


for person in more_people:
    print ("first", "last","age")
    for attribute in person:
        print (attribute)


coordinates = [[10,10], [20,10],[10,20]]

for cord in coordinates:
    idx = 0
    print("Position:")
    for position in cord:
        p = "X"
        if idx == 1:
            p = "Y"
        print(f"{p}-{position}")
        idx += 1