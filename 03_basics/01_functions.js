// function sayMyName(){   //function is the pacage of code which we can use repeatedely
//     console.log("M")
//     console.log("A")
//     console.log("N")
//     console.log("I")
//     console.log("S")
//     console.log("H")
// }

// sayMyName()


// function addTwoNumber(num1,num2){
//          console.log(num1+num2)
// }

// addTwoNumber(4,5)

function addTwoNumber(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}

const sum=addTwoNumber(5,6)

console.log("Result: ",sum)


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Manish"))
console.log(loginUserMessage(""))  // here will we empty on place of username
console.log(loginUserMessage())    //here it will print "undefined just logged in"


function calculateCarPrice(...num1){    //here we can put one or more parameters in the function
    return num1
}
console.log(calculateCarPrice(200,44,300,800))

//how to pass object in the function

const user={
    username: "Manish",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

//how to pass array in the function

const myNewArray=[200,500,300,100]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray))
