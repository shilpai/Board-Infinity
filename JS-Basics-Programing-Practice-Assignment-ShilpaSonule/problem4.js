// var dt = 28;
//  var month = 8;
//  var year = 2022;
// // daysInMonth = new Date(year, month, 0).getDate();
//  console.log("problem 4 - ",daysInMonth = new Date(year, month, 0).getDate());

function month(n){
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(n>=1 && n<=12){
        return months[n-1];
    }
    return "Error"
}
console.log("problem 4 - ",month(9));