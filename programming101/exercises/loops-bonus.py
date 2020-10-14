username = input("Username:\n")
counter = 0
while username != "Shoel":
    username = input("Please use correct username")
    counter += 1
    if counter > 2:
        print ("Try again next time!")
        exit()
 
password = input ("Password:\n")
counter = 0
while password != "Yes":
    password = input("Try again")
    counter += 1
    if counter >= 2:
        print ("Try again next time!")
        exit()
print ("Hello and Welcome")