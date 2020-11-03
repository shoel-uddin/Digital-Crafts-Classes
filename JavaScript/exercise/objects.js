// Create an object called 'spaceship'.

// give it the following keys with whatever values seems reasonable to you. speed,acceleration, passangers, fuel.
let spaceship = {
    speed: 10,
    accel: 5,
    pass: 25,
    fuel: 100
}
// Using the spaceship object above add a payload key after the object has been created. (just give it a number)
spaceship.payload = 2000
console.log(spaceship)

// Using the same object above, lower the amount of fuel by 1/3.
spaceship.fuel = spaceship.fuel - (spaceship.fuel/3)
console.log(spaceship)

// loop through the object and give a message to the console like the one below for every property in the object.
for (attrib in spaceship)
console.log(attrib,":", spaceship[attrib])