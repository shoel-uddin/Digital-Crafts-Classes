# Write a program that has a list of shopping lists that 
#     where each list is for a different food group.
# Print each full list on a seperate line.
# ['Corn','Potatoes','Tomatoes']
# ['milk','eggs','cheese','yogurt']
# ['frozen pizza','popsicle']

shopping_list =  [
    ['Corn','Potatoes','Tomatoes'],
    ['milk','eggs','cheese','yogurt'],
    ['frozen pizza','popsicle']
]

print (shopping_list[0])
print (shopping_list[1])
print (shopping_list[2])

#for food in shopping_list:
    # print (food)

# Using the code from the previous exercise, have each grouping 
#     have a title with the number in the title and each item of 
#     the list have a number in front of the item.
# (bonus) Have each of the titles of the main grouping be in a 
#     seperate list that gives the name to the heading.
# 1. Veggies
#     1. Corn
#     2. Potatoes
#     3. Tomatoes
# 2. Cold Items
#     1. milk
#     2. eggs
# ...etc

food_type = [ "Veggi", "Cold Item", "Junk"]
shopping_list =  [
    ['Corn','Potatoes','Tomatoes'],
    ['milk','eggs','cheese','yogurt'],
    ['frozen pizza','popsicle']
]
i = 0
for name in food_type:
    j = 0
    print ("%i. %s" % (i +1, name))
    for food in shopping_list[i]:
        print (" %i. %s" %(j+1, food))
        j += 1
    i += 1