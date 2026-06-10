//array
const myArray=[0,1,2,3,4,5]

console.log(myArray)
console.log(myArray[0])

//Array methods
myArray.push(67)
myArray.pop()   //delete last elemnt 
console.log(myArray)

myArray.unshift(9) //adding 9 in front
myArray.shift()    //removing 9
console.log(myArray)

console.log(myArray.includes(9))  // true if 9 is present in array else false 
console.log(myArray.indexOf(3))   //it will tell the index of element 3

console.log(myArray)

const newArray=myArray.join()   //it will convert the array in the string
console.log(myArray)
console.log(newArray)

//slice , splice

console.log("A ",myArray)

const myn1=myArray.slice(1,3)  //slice use karne pr wo 1 se 3 tak 3 ko exclude karke print karege

console.log(myn1)
console.log("B ",myArray)

const myn2=myArray.splice(1,3)   //splice use karne pr ye array ko hi change kar deta hai
console.log(myn2)

console.log("C ", myArray)  //after using splice the array is [0,4,5]


