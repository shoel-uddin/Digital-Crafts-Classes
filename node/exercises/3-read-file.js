const fs = require("fs")
// Create a node app that will read the contents of a text file and console.log the content.
fs.readFile("text.txt", 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
})

// Create a json file called "data.json" with the following content
//For each name person console.log("{name} is {age} years old!" where name and age are the keys name and age respectivly.
fs.readFile("data.json", 'utf8', (err, data)=>{
    if (err) throw err;
    let people = JSON.parse (data)
    console.log(people)

    people.forEach((person) => { //person is a place holder
        console.log(`${person.name} is ${person.age} years old!`)
    });
    
})
