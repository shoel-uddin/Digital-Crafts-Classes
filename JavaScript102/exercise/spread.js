// Create an array of letters and create an array of numbers.

// Using the spread operator create an array of the values of the letters first then the numbers.
// Make another array with the numbers first.

let letters = ["a", "b", "c", "d"];
let num = [1, 2, 3, 4];

let letNum = [...letters, ...num];
console.log(letNum);

let numLet = [...num, ...letters];
console.log(numLet);

// Using the spread operator when possible do the following:
const cars = [
  {
    make: "Chevy",
    model: "Corvette",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
  },
  {
    make: "GMC",
    model: "h2",
    year: 2010,
  },
];

let vovlo = {
  make: "Volvo",
  model: "S80",
  year: 2015,
};
let jeep = {
  make: "Jeep",
  model: "Grand",
  year: 2018,
};

let newCars = [...cars, vovlo, jeep];
console.log(newCars);
// Create a new array adding at least 2 more cars.
// From that new array return another array removing any cars made before 2018.
// Create a new array with a 2010 ford focus added to the begining.
// Create a new array of the cars sorted by date without changing the original cars array.
