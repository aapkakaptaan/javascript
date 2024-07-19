function mult5(num){

    return num*5
}

mult5.power=2

console.log(mult5(5));
console.log(mult5.power);
console.log(mult5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;

}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.PrintMe=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.PrintMe()

