const coding=['js','ruby','java','py','cpp']

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const mycoding=[
    {
        languageName:'java',
        fileName:'java'
    },
    {
        languageName:'javaScript',
        fileName:'js'
    },
    {
        languageName:'python',
        fileName:'py'
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})