name = input("What is your  name?\n")

if len(name) > 3:
    print ("Your name is long enough")

    if len(name) > 15:
        print("Thats very long.")
    else:
        print(f"Welcome {name}")

name = input("What is your name: /n")

if len(name) > 3:
    if len(name) < 10:
        if len(name) == 4:
            # Even one block lower
            print('Perfect Length!')
        else:
            print("It's an ok length")
        
        print(f"Welcme {name}")
    else:
        print("That's way to long partner")
else:
    print('%s is too few characters' % len(name))

### Multiples