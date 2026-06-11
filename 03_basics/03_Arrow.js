const user ={
    username: "Manish",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)   //this will only work in object 
        //console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
//user.welcomeMessage()
//console.log(this)


// function chai(){
//     console.log(this)
// }

//  function chai(){
//     let username="Manish"
//     console.log(this.username)
//  }
// chai()

// const chai=function(){
//     let username="Manish"
//     console.log(this.username)
// }
//  chai()

const chai = () => {
    let username = "Manish"
    console.log(this.username)
}

chai()

//arrow function
// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(4,5))

const addTwo = (num1,num2) =>(num1+num2)  // we can write the function without return
console.log(addTwo(3,6))
