var firstNum = prompt("Enter the Number");
var calOperator = prompt("Enter the Calculation Operator 'like' +, -, *, /, %,");
var secondNum = prompt("Enter the 2nd Number");
firstNum = Number(firstNum);
secondNum = Number(secondNum);
if (calOperator === "+"){
alert(firstNum + secondNum);
}
else if (calOperator === "-"){
alert(firstNum - secondNum);
}
else if (calOperator === "*"){
alert(firstNum * secondNum);
}
else if (calOperator === "/"){
alert(firstNum / secondNum);
}
else if (calOperator === "%"){
alert(firstNum % secondNum);
}
else {
alert("Enter the wrong Calculation opertaor or Not a enter a number")
}