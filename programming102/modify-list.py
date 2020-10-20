my_pets = ["sky", "pescale"]
my_pets.append("rainbow") #append is single item
print (my_pets)

my_dogs = ["Daisy", "MOLLY"]
my_cats= ["Shadow", "Rainbow"]

my_pets = my_dogs + my_cats
print (my_pets)
print (my_dogs)

combine_literal = [1,2,3] + ["A", 'B', True]
print (combine_literal)


my_pets1= []
my_pets1.extend (my_dogs) #adds more than one item
print(my_pets1)

my_pets1.extend (my_cats)
print (my_pets1)

my_pets [2] = "El Gato"
print (my_pets)

del my_pets[2]
print (my_pets)