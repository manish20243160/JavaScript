// curly braces ke bahar ke sabhi variable is global and 
//declared variable inside curly braces is called local variable

let a=300
if(true){
    let a=10
    const b=20
    console.log("INNER : ", a)
}


//nested variable

function one(){
    const username="Manish"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) // it will give error 

    two()
}

one()


//++++++++++++++++++Interesting+++++++++++++++
console.log(add_one(5))  //intersting
function add_one(num){
    return num+1
}


add_two(5)  
const add_two=function(num){
    return num + 2
}