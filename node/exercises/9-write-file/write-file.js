const fs = require("fs")

let paragraph = "Ex labore occaecat sunt reprehenderit. Aliqua non nisi aute elit ipsum nulla enim exercitation magna. Officia incididunt Lorem labore excepteur laboris excepteur non labore nostrud aliqua ea ipsum in dolore. Voluptate nisi in proident elit nisi anim cupidatat Lorem nulla Lorem. Nisi est et et nostrud incididunt ad."

fs.writeFile("paragraph.txt", paragraph, 'utf8', (err)=>{
    if (err) throw err;
    console.log('The file has been saved')
})