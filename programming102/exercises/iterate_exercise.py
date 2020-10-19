#Exercise 1
# Using a while loop create a program that prints the values 
#   of your favorite movie stars.
# have a number in front of the printed name.

stars = ["Jakie", "Jet", "Tony"]
index = 0
while index < len(stars):
    print (index +1, stars[index])
    index +=1



#Exercise 2
# Using a for loop, re-do the above exercise.
# (hint) you still need to create a variable that is incrimented.

index = 0
for star in stars:
    print (index +1,":", star)
    index +=1



#Exercise 3
# Create a program that will add the values of a list of numbers, 
#   and then print out the results.
# (hint) You will need to create a variable to hold the current value.
# Repeat with several different lists of numbers of different lengths.
#     # the list of numbers is [1,2,3]
#     #output to console
#     6


# stars = ["Jakie", "Jet", "Tony"]
# stars1 = ["Jakie", "Jet", "Tony", "hassel"]

# a = range(len (stars1) +1)
# b = sum (a)
# print (b)

num = [ 1, 2, 3]
num1 = [ 1, 2, 3,4]
print (sum (num))
print (sum (num1))