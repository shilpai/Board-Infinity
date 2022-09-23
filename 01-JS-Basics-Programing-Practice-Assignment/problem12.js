function palindrome(n){
    let count = 0;
    for(let i=1;i<=n;i++){
        if(i.toString()===i.toString().split("").reverse().join("")){
            count++;
        }
    }
    return count;
}
console.log("problem 12 - ",palindrome(111))
