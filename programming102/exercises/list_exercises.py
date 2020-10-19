#Exercise 1
# Create a program that has a list of at least 3 of your favorite 
# foods in order and assign that list to a variable named "favorite_foods".
# print out the value of your favorite food by accessing by it's index.
# print out the last item on the list as well.

favorite_foods = ["Pizza", "Pasta", "Byriani"]
print (favorite_foods[2])
print (favorite_foods[-1])

# #Exercise 2
# #Create a program that contains a list of 4 different "things" around you.

# # Print out the each item on a new line with the number of it's 
# # index in front of the item.
# # 0. Coffee Cup
# # 1. Speaker
# # 2. Monitor
# # 3. Keyboard

random_things = ["Mug", "Lamp", "Fan", "Boxes"]
index = 0 
while index < len(random_things):
    things = random_things[index]
    print("%d: %s" % (index + 1, things)) #things [index]
    index += 1

# #Using the code from exercise 2, prompt the user for 
# # which item the user thinks is the most interesting. 
# # Tell the user to use numbers to pick. (IE 0-3).

# # When the user has entered the value print out the 
# # selection that the user chose with some sort of pithy message 
# # associated with the choice.
# #     "You chose Coffee Cup, You must like coffee!"

interests = int(input("Which do you thing is most interresting? (Pick 1-4)\n"))

if interests == 0:
    print (f"You chose {random_things[0]}. You must be thursty")
elif interests == 1:
    print ("You must need some light")
elif interests == 2:
    print ("It must be hot lets get some air flowing")
else:
    print ("would you like some to use")