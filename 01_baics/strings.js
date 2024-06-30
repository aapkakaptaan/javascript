const name="sid"
const repoCount=50

// console.log(name+ repoCount + "Value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName=new String("kaptaan")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,3)
console.log(newString);

const newS="       SIDDHANT"
console.log(newS)
console.log(newS.trim());

const url="https://siddhant.com/siddhant%20Rai"

console.log(url.replace('%20','-'))

console.log(url.includes('siddhant'))

console.log(url.split('-'))