username = input("Username:\n")

while username != "Shoel":
    username = input("Please use correct username")
    counter = 0
    counter += 1
    if counter > 2:
        print ("Try again next time!")
        break 
password = input ("Password:\n")

while password != "Yes":
    password = input("Try again")

print ("Hello and Welcome")