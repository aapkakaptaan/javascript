const userEmail=""

// if(userEmail){
//     console.log("Gor user email");
// }else{
//     console.log("not have");
// }

// truthy values: true,1,"0",'false'," ",[],{},function(){}


//falsy values: false,0,-0,bigint,0n,"",null,undefined,NaN

if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}


// nullish caolescing operator (??): null undefined


// let val1;
// val1=5??10

// let val2=null??10

// console.log(val1);

// console.log(val2);

// terniary operator

const price=100
price>=80?console.log("<80"):console.log(">80");