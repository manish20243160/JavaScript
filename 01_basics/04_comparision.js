console.log(null>0)
console.log(null==0)
console.log(null>=0)
//For relational comparisons (>, <, >=, <=), JavaScript converts null to a number.(null //0)

// The loose equality operator == follows special rules.
// According to JavaScript's equality algorithm:
// null is only loosely equal to undefined.
// null is not equal to 0