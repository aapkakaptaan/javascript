const my=[1,2,3,4,5,6,7,8,9,10]

// const nw=my.map((num)=> num+10)

//chaining:


const nw=my.map((nums)=>nums*10).map((num)=>num+1).filter((nums)=>{return nums>50})

console.log(nw);