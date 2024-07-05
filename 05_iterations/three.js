//for of

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,45,6]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings="HELLO WORLD"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//maps

const map=new Map()
map.set('IN',"INDIA")

map.set('USA',"USA")
map.set('FR','FRANCE')

//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject={
    'game1':"NFS",
    'game2':"SPiderman"
}
// objects are not iterable
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);

// }