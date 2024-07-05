const myObject={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'apple'
}


for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=['js','rb','cpp','py']

for(const key in programming){
    console.log(programming[key]);
}

// const map=new Map()
// map.set('IN',"INDIA")

// map.set('USA',"USA")
// map.set('FR','FRANCE')

// for (const key in map) {
//     console.log(key);
// }


