// console.log(typeof 'yes')
// console.log(typeof new String (' yes'))

// let myString = 'yes'
// let anotherString = new String ('yes')

// console.log(myString, myString.length)
// console.log(anotherString, anotherString.length)



function Animal (type, name, noise){
    this.name = name;
    this.type = type;
    this.noise= noise;
    this.nameNoise= function(){
        console.log(this.name+ ' says ' +this.noise)
    }
}

let shadow = new Animal ('cat', 'Shadow', 'GROOWN')
shadow.nameNoise()