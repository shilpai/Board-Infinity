function leftRotate(n,s,arr){
    let finalArr = [];

    for(let i=s;i<n;i++){
        finalArr.push(arr[i]);
    }
    for(let i=0;i<s;i++){
        finalArr.push(arr[i]);
    }

    return finalArr;
}
console.log("problem 14 - ",leftRotate(7,2,[1, 2, 3, 4, 5, 6, 7]))