function occurances(arr){
    let finalArr = [];
    let dict = {}

    let uniqVals = new Set(arr);
    uniqVals = [...uniqVals];

    for(i=0;i<uniqVals.length;i++){
        dict[uniqVals[i]] = 0;
    }

    // counting
    let max = 0;
    for(i=0;i<arr.length;i++){
        dict[arr[i]] += 1;
        if(dict[arr[i]]>max){
            max = dict[arr[i]];
        }
    }

    // sorting
    let dict1 = {}
    for(let i=1;i<=max;i++){
        dict1[i] = []
    }
    
    for(let j=1;j<=max;j++){
        for(let key in dict){
            if(dict[key] === j){
                dict1[j].push(key);
            }
        }
    }

    for(let val in dict1){
        for(let i=0;i<dict1[val].length;i++){
            if(val >= 0){
                dict1[val].sort((a, b)=> b-a);
            }else{
                dict1[val].sort((a, b)=> a-b);
            }
        }
    }
    for(i=max;i>0;i--){
        finalArr.push(...dict1[i])
    }
    console.log(dict1)
    return finalArr;
}
console.log("problem 11 - ",occurances([3, 3, 4, 4, 7, 8]));