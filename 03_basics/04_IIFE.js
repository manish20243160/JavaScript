//Immediately Invoked Function Expressions(IIFE)

//Why we use an IIFE??
//1)-Avoid polluting the global scope:-variables inside the IIFE are not accessible outside it

(function(){
    console.log("IIFE");
})();

//first ()->convert the function declaration into a function expression
//Second()->Invokes(calls) the function immediately
