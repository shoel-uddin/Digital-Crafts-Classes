let people = [
    {
        name: "Sho",
        age:30,
        oldest: "true"
    },
    {
        name:"Anna",
        age:37
    },
    {
        name:"Olivia",
        age:11
    },
    {
        name:"Alle",
        age:9
    },
    {
        name:"Mark",
        age:7
    } 

]

console.log(people[0].name+' is '+people[0].age+' years old')

let cur = people [1];
console.log(cur.name+' is '+cur.age+' years old')

//loop
people.forEach(function(person){
    console.log(person.name+' is '+person.age+' years old')
    })