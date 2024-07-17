const promise1=new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography,network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
})



const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Siddhant",email:"siddhantcreate@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"kaptaan",password:"2004"})
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
       
    },1000)
})

promise4.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("FInally THe PROmise is EIther reSOLVED oR REJected");
})



const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"2004"})
        }else{
            reject('ERROR: JS WENT WRONG')
        }
       
    },1000)
})

async function consumePromise5(){
   try{
    const response=await promise5
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
}

consumePromise5()


// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})