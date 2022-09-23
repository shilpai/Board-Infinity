function quad(a,b,c){
    let result1,result2;
    result1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    result2 = (b + Math.sqrt(b*b - 4*a*c))/(2*a);
    return [result1.toFixed(2),result2.toFixed(2)];
}
console.log("problem 9 - ",quad(1,5,6));
