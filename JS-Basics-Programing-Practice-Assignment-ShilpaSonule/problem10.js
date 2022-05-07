function steal(n,arr){
    let evenVals = [];
    let oddVals = [];
    let finalArr = [];
    for(let i=0;i<n;i++){
        if(i%2===0){
            evenVals.push(arr[i]);
        } else {
            oddVals.push(arr[i]);
        }
    }
    evenVals.sort((a, b)=> a-b);
    for(let i=0;i<n;i++){
        if(i%2===0){
            finalArr[i] = evenVals.shift();
        } else {
            finalArr[i] = oddVals.shift()
        }
    }
    return finalArr;
}

console.log("problem 10 - ",steal(5,[3, 9, 1, 44, 6]));