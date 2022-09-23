// let A = "We are Learner of JavaScript"
// var result = A.replace(/\s/g , '') ;
// console.log(result) ;
// console.log("problem 8 - ",result.length) ;

function removeWhiteSpace(a){
    let tmp = "";
    for(i in a){
        if(a[i]!==" "){
            tmp += a[i];
        }
    }
    return tmp.length;
}
console.log("problem 8 - ",removeWhiteSpace("Project Mars"));
