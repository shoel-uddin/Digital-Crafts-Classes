let myArr = [1, 2, 3, 4];
let [a, b, c, d] = myArr;
let [, second, ,] = myArr;
let [first, ...rest] = myArr;
console.log(myArr);

let ship = {
  name: "ship",
  age: 200,
  speed: 100,
  accel: 40,
};

const { name, age } = ship;
console.log(name, age);
const { accel } = ship;
console.log(accel);
let { speed } = ship;
console.log(speed);
