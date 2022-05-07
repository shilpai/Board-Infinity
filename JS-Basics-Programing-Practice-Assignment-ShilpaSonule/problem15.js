function expression(arr){
    let result=0,i=0;
    
    while(true){
        if(arr[i] === '\*' || arr[i] ==='/' || arr[i] ==='+' || arr[i] ==='-'){
            let sum =  eval(arr[i-2],arr[i-1],arr[i]);
            arr[i] = sum;
            arr.splice(i-1,1);
            arr.splice(i-2,1);
            i = i-2;
        }
        i++;
        if(arr.length===1){
            break;
        }
    }
    
    result = arr[0]
    return result;
}
function eval(a,b,op){
    let x = parseFloat(a);
    let y = parseFloat(b);
    let result;
    if(op==='+'){
        result = x+y;
    }
    if(op==='-'){
        result = x-y;
    }
    if(op==='*'){
        result = x*y;
    }
    if(op==='/'){
        result = x/y;
    }
    console.log(a+op+b+' --> '+result.toString())
    return result;
}
console.log("problem 15 - ",expression("5 3 1 \* + 9 -".split(" ")));
