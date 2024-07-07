const my=[1,2,3,4,5,6]

const initialvalue=0


// const myTotal=my.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal
// },0)

const myTotal=my.reduce((acc,curr)=> acc+curr,0)


console.log(myTotal);

const shoppingCart=[
    {
        item:'js',
        price:99
    },
    {
        item:'oopj',
        price:99
    },
    {
        item:'data science',
        price:99
    },
    {
        item:'kotlin',
        price:99
    }
]

const price=shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(price);