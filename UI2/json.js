let myJSONArray = '["string1", "string2", "string3"]';
let moreJSONArray = '[7, false, true, 42, "more text"]';
let myJsonObject = `{
    "name":"Clint",
    "age":39,
    "email":"clint@digitalcrafts.com"
}`;
let arrayOfObjectJSON = `[
    {
        "name":"Clint",
        "age":39,
        "email":"clint@digitalcrafts.com"
    },
    {
        "name":"Anna",
        "age":37,
        "email":"anna@noneya.com"
    },
    {
        "name":"Olivia",
        "age":11,
        "email":"olivia@noneya.com"
    }
]`;

let realArray = JSON.parse(myJSONArray);
console.log(realArray);
