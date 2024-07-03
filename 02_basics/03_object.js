//singleton

// object literals

const mySym=Symbol('key1')

const JsUser={
    name: "Siddhant",
    "full name" :"Siddhant RAi",
    age:20,
    location:"gkp",
    isLoggedIn: false,
    lastLoginDays: ["MOnday","SAturday"],
    [mySym]:"mykey1"
    
}
// myArray=["s","i"]
// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


// JsUser.location="bbsr"
// console.log(JsUser["location"]);
// Object.freeze(JsUser)


// JsUser.location="gkp"
// console.log(JsUser["location"]);
// console.log(JsUser); 

JsUser.greeting=function(){
    console.log("Hekko Siddhanto");
}
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());