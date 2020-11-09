//spread at the begining
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5];
console.log(array2);

//spread anywhere
let array3 = [...array1, 100, 200, ...array2];

let me = {
  firstName: "Clint",
  lastName: "Fleetwood",
  email: "clint@digitalcrafts.com",
};

let newPerson = { age: 39, ...me };
console.log(newPerson);

//Math Functions
let number = [10, 20, 30];
console.log(Math.max(...number)); // spread the numbers as arguments

//updating objects (Very Important for React)
let family = [
  {
    name: "clint",
    age: 38,
  },
  {
    name: "Anna",
    age: 37,
  },
  {
    name: "Olivia",
    age: 11,
  },
  {
    name: "Alle",
    age: 9,
  },
  {
    name: "Mark",
    age: 7,
  },
];
const update = (member) => ({ ...member, surName: "Fleetwood" });
let updatedFamily = family.map(update);
//results
console.log(updatedFamily);
console.log(family);
