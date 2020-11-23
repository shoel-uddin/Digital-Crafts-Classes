const os = require("os")

console.log(os.hostname())
console.log(os.platform())

const getInfo = ()=>{
    console.log(os.hostname(),os.homedir(), os.platform() )
}
getInfo()

const http = require("http")
const fs = require("fs")

console.log(Object.keys(os))