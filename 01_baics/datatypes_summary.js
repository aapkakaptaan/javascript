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

// memory:
// stack(primitive),heap(non-primitive)

let me="Siddhant"
let anotherMe=me
anotherMe="Siddhant Rai"
console.log(me);
console.log(anotherMe);

let userOne={
    email: "sid@gamil.co",
    upi: "fhef@sbi"
}

let userTwo=userOne

userTwo.email="Siddhant@gmail.com"

console.log(userOne.email);

console.log(userTwo.email);