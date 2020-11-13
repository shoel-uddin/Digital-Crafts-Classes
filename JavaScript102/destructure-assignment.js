/* Looks odd but [x,y] is not an actual array it is assigning the variables */
// let [x, y] = [20, 30];
// console.log(x);
// console.log(y);

//you do not need everything
// let me = ["Clint", 29, "clint@digitalcrafts.com", 160];
// let [name, age, , weight] = me; /// you can skip something from the list
// console.log(name, age, weight);

// //rest of the items returned as an array
// let [x, y, ...rest] = [20, 30, 40, 50];
// console.log(x, y, rest);

let me = { name: "Clint", age: 29, email: "clint@digitalcrafts.com" };
const { name, age, email } = me;
console.log(name, age, email);
