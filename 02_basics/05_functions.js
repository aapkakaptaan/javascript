// function sayMyname(){
//     console.log("Siddhant");
// }

// sayMyname()

// function addTwoNumbers(num1,num2){
//     return num1+num2
// }

// const sum=addTwoNumbers(3,4);
// console.log(sum);

function loginUser(username){
    if(username===undefined){
        console.log("PLEASE ENTER A PASSWORD")
        return ;
    }
    return `!!!!!!!${username} just logged in!!!!!!!`
}

console.log(loginUser())
function shopingCarts(...num1){
    return num1
}

//function with objects:

const user={
    username:"Siddhant",
    price: 200
}
function handObject(anyObject){
    console.log(`USERNAME is ${anyObject.username} and price is ${anyObject.price}`);
}
// handObject(user)

handObject({
    username:"sam",
    price: 20000
})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue([100,200,300,400]));
console.log(returnSecondValue(myNewArray));