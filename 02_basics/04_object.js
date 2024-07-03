// const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email: "sid@gmial.com",
    fullName:{
        username:{
            firstName:"Siddhant",
            lastName:"Rai"
        }
    }
}
// console.log(regularUser.fullName.username.firstName);

const obj1={1:'a',2:'b'}

const onj2={3:'c',4:'d'}

// const obj3={obj1,onj2}
// const obj3=Object.assign({},obj1,onj2)

const obj3={...obj1,...onj2}
console.log(obj3);

const users=[
    {
        id:1,
        email: "sid@gmail.com"
    },
    {
        id:1,
        email: "sid@gmail.com"
    },
    {
        id:1,
        email: "sid@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Siddhant"
}

const{courseInstructor: instructor}=course;

console.log(instructor);

// {
//     "name": "siddhant",
//     "courseName": "js in hindi",
//     "price": "free"
// }
 
// [
//     {},
//     {},
//     {},
//     {}
// ]