// const x = 5
// const y = 6
// const Sum=(x,y) =>{
//     return x + y
// }

const { json } = require("stream/consumers")

// module.exports = Sum

const fs = require('fs')
const person = {
    name: "Kasaby",
    age:"23"
}

const personJson = JSON.stringify(person) 
fs.writeFileSync('person.json',personJson)
fs.readFileSync('person.json').toString()
const readPerson = fs.readFileSync('person.json').toString()

const convertOblect = JSON.parse(readPerson) 
console.log(convertOblect);

convertOblect.name = "mohamed"
convertOblect.age = "25"
console.log(convertOblect);

const personJsoncon = JSON.stringify(convertOblect) 

fs.writeFileSync('person.json',personJsoncon)
