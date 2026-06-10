//object literals

const mySym=Symbol("key1")

const JsUser={
    name: "Manish",
    "full name": "Manish Chaudhary",
    age: 20,
    [mySym]: "mykey1",
    location: "Babhnan",
    email:"manishgoogle.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

//console.log(JsUser.full name)   //it is wrong 
console.log(JsUser["full name"])

console.log(JsUser[mySym])

JsUser.email="manissh@123.com"  //it is how we change the value

//Object.freeze(JsUser)   //it is use two freeze the object so that we can not make any change in the object 

JsUser.name="XYZ"
console.log(JsUser)


JsUser.greeting=function(){   //define a function inside the object
    console.log("Hello Js User")
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())