const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

 const allHeros=marvel_heros.concat(dc_heros)  //it convert two array in single array
 console.log(allHeros)

 const all_new_heros=[...marvel_heros, ...dc_heros]  // it is  used to merge two or more array but in concat we can only merge two array
 console.log(all_new_heros)

 const another_array=[1,2,3, [4,5,6],7,[6,7,[4,5]]]
 const real_another_array=another_array.flat(Infinity)  //it will convert array in 1-D array
 console.log(real_another_array)


 console.log(Array.isArray("Manish")) //it will return true if array else false
 console.log(Array.from("Manish"))  //it convert it into array 

 console.log(Array.from({Name:"Manish"})) //it will return empty because here is not clear that which part(key or value) we have to convert in array

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))
