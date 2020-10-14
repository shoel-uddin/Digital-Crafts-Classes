name = input("What is your name:\n")
num = len(name)
## you can have multiple conditions here
if num > 3 and num < 15:
    if len(name) == 4:
        print('Perfect Length!')
    else:
        print("It's an ok length")
        
    print(f"Welcme {name}")
else:
    print('%s is too few characters' % len(name))

if num > 3 or num < 15:
    print("This is valid")