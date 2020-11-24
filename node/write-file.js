const fs = require("fs")
let lockfile = false

const writeFile =()=>{
    if(!lockfile){
        lockfile=true
        fs.writeFile("myfile.txt", "Hello Node File!", 'utf8', (err)=>{
            if (err) throw err;
            lockfile = false
            console.log('File written without errors')
        })
    }else{
        console.log('the file is locked')
    }
}
