const tinderUser={}

tinderUser.id="113abc"
tinderUser.name="XYZ"
tinderUser.isLoggedIn=false
console.log(tinderUser)


const regularUser={
    email:"njjrjnr@gmail.com",
    fullname:{
       userfullname:{
        firstname:"Manish",
        lastname:"Chaudhary"
       }
    }
}

console.log(regularUser)
console.log(regularUser.fullname.userfullname.firstname)  //accessing the value


const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}
const obj3={5: "e", 6: "f"}

const obj4=Object.assign( {}, obj1, obj2, obj3 )  //merge all object 

console.log(obj4)

const obj5={...obj1, ...obj2, ...obj3}  //method second for merging two or more object
console.log(obj5)


console.log(tinderUser)
console.log(Object.keys(tinderUser))  //it will print all keys of tinderUser's objects in array
console.log(Object.values(tinderUser)) //it will print all values of tinderUser's objects array
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  //check , object has isLoggedIn key?

