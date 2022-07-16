const answer = document.querySelector(".answer");
const inputField = document.querySelector(".text-field");
var inputVal = "0";
var output = 0;

function insertVal(val) {
    if(inputVal==="0"){
        inputVal = ""
    }
    inputVal += val;
    inputField.innerHTML = inputVal;
    // console.log(inputVal);
}
function clearField() {
    inputField.innerHTML = "0";
    inputVal = "0";
}
function calculate() {
    try {
        output = eval(inputVal);
    }catch(e) {
        alert("Error");
    }
    answer.innerHTML = output.toString();
}