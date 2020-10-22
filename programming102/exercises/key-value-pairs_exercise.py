#1
movie = {
    "name":"Star Wars",
    "episode":4,
    "year":"1977"
  }

print (movie)

#2

person = {
    "first_name": "Sho", 
    "last_name": "Uddin", 
    "age": 30, 
    "hair_color": "Black"
}

for key in person:
    print (person[key])

print (f"Hello {person['first_name']} {person['last_name']}. Since you are {person['age']} years old you are too old to ride this ride, but you do have nice {person['hair_color']} hair.")



person1= {
    "name": "sho", 
    "phone": 404, 
    "email": "sho@email.com"
}

person2= {
    "name": "Lia", 
    "phone": 678, 
    "email": "lia@email.com"
}

people = [person1,person2]

for key in person1:
    print(key, person1[key])

for key in person2:
    print(key, person2[key])