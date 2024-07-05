//immediately invoked function expressions  (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`);
})();


( (name)=>{
    console.log(`DB cONNECTED TWO ${name}`)
}  )('Siddhant')