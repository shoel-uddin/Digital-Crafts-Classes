class Person:
    def __init__(self, name, age, height="normal"):
        print(self)
        print("you created a person.")
        self.name = name
        self.age = age
        self.height = height


sho = Person("Sho", 30)
anna = Person("Anna", 29, "Short")


print(sho.name)
print(f"Hello {sho.name}, you are {sho.age} years old!")
print(sho.height)
print(anna.height)