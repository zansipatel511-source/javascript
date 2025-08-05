// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 751236974123658n//



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Zansi",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);