var side1 = 12; 
var side2 = 12; 
var side3 = 12; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(Math.round(area))
console.log("problem 3 - ",area.toFixed(2));
