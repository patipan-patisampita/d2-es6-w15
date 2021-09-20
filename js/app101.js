
function returnFive(){
    return 5;
} 
function addTwo(num1 = 10, num2 = num1 + returnFive()){
    // num1 = num1 || 10;
    // num2 = num2 || 20;
    return num1 + num2; //30
}

//document.writeln(addTwo());
console.log(addTwo());