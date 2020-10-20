# Write a program that has a list of names.
# Add two new names to that list.
# Print the results.

my_pets = ["sky", "pescale"]
new_pets = ["columbus", "theo"] 
all_pets = my_pets + new_pets
print (all_pets)




# Write a program that has 5 names in a list.
# Replace the items at index 2 and 4 with "Foo" and "Bar" respectively.

names = ["sky", "pescale","columbus", "theo", "light"]
print (names)
names [2] = "Foo"
names [4] = "Bar"
print (names)


# Write a program that has a list of 5 names.
# Loop through the array printing the item at index 0 and then 
#  removing that item from the array until there are no items in the array.
# (hint) This will use a while loop.

names1 = ["sky", "pescale","columbus", "theo", "light"]
while len (names1):
    print(names1[0])
    del (names1[0])