pet_name = input("What if your pet's name?\n")

if len(pet_name) < 3:
    print ("the name length is too short\n")

if len(pet_name) >= 3:
    if pet_name == ("Shadow"):
        print ("El Gato Diablo!\n")

    elif pet_name == ("Daisy"):
        print ("Good Dog!\n")

    else:
        print (f"AWWW sweet {pet_name} \n")
