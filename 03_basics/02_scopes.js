
var c=300
let a=300
if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);

// // console.log(b)

// console.log(c)   // c inside the if statement will be printed as it can accessed outside it's scope

function one(){
    const username="sid"
    function two(){
        const website='youtube'
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username="Siddhant"
    if(true){
        const website= " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++interesting+++++++++++++++++++++++

//function
function addOne(num){
    return num+1
}

addOne(5)


//expression
const addTwo=function(num){
    return num+2
}

addTwo(5)


//arrow function

