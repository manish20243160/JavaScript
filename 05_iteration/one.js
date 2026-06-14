// for
const Array=[4,5]
for(let i=0;i<Array.length;i++){
  console.log(Array[i])
}

//break and continue

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5")
//         break
//     }
//     console.log(`Value of i is ${i}`)
// }

for(let i=1;i<=20;i++){
    if(i==15){
        console.log("Detected 15")
        continue
    }
    console.log(`Value of i is ${i}`)
}