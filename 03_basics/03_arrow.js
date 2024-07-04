const user={
    username: "Sid",
    price: 999,

    welcome_message: function(){
        console.log(`${this.username},welcome to website`);
    }
}

// user.welcome_message()
// user.username="Siddhant"
// user.welcome_message()

// console.log(this);

// function one(){
//     let username="Siddhant"
//     console.log(this.username);
// }

// one()


//arrow function:

const one=()=>{
    let username="Siddhant"
    console.log(this);
    
}

// one()

// const addTwo=(num1,num2)=>{        //explicit function
//     return num1+num2
// }
// const addTw=(num1,num2)=>num1+num2  //implicit function
// const addT=(num1,num2)=>(num1+num2)

const add_Two=(num1,num2)=>({username: "sid"})
console.log(add_Two(3,5));


// console.log(addTwo(2,5));
// console.log(addTw(2,5));

const arr=[2,34,4]
arr.array.forEach(element => {
    
});