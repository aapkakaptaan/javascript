// primitive : 7types
// String,Number,Boolean,null,undefined,Symbol,BigInt

//reference or non-primitive:  
//array, objects,functions

const score=100

const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id===anotherID);

const bigNumber=35546674533n

const heros=["shaktimaan","naagraj","doga"]
let myObj={
    name: "hitesh",
    age: 22,
}

const myFunction=function(){
    console.log("HELLO WORLD");
}

console.log(typeof myFunction)