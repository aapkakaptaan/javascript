const user={
    username: "Sid",
    loginCount:9,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username:${use}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this
}

const user1=new User("Sid",12,true)
const user2=new User("Siddhant",23,false)   // if we won't right new then it will overwrite the user1 
console.log(user1);
console.log(user2);