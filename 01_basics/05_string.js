const name="Manish"
const repoCount=50

//console.log(name + repoCount + " Value") ->(dont use it )

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName=new String('manish-ma')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString=gameName.substring(0,4)  // here we cannt use negative integer
console.log(newString)

const anotherString=gameName.slice(-8,4)  // here we can use negative integer
console.log(anotherString)

const newStringOne="  Manish  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://manish.com/manish%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('manish')) // ye batata hai ye string present hai ya nhi

console.log(gameName.split('-'))
