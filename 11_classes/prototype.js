// let myName="siddhant    "

// console.log(myName.truelength);



let myHeros=["thor","spidy"]

let heroPower={
    thor:"hammer",
    spidy:"sling",
    getSpidyPower: function(){
        console.log(`Spidy's power is ${this.spidy}`);
    }
}

Object.prototype.siddhant=function(){
    console.log(`siddhant was here`);
}

Array.prototype.heysid=function(){
    console.log(`Sid says hello!!!`);
}

// heroPower.siddhant()
heroPower.getSpidyPower()

myHeros.siddhant()
// heroPower.heysid()

//inheritance

const User={
    name: "chai",
    email: "sid@gmail.com"
}

const teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__=User


//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUsername="Chai aur Code     "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()

'sid'.truelength()
'Ice tea'.truelength()