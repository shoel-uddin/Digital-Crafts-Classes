let myobj = {}

let aboutMe = {
    name:"Shoel",
    age:30,
    tall:false
}

console.log(aboutMe.name)

//adding/editing
aboutMe.name = "sho"
aboutMe.gender = "male"
console.log(aboutMe)

//delete
delete aboutMe.tall
console.log(aboutMe)

//loop

for (attrib in aboutMe){
    // if(!aboutMe.hasOwnProperty(attrib)) continue;
    console.log(attrib,":", aboutMe[attrib])
}