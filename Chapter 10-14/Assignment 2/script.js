var totalMarks= 500;
var math = prompt("Enter the Math obtain Number");
var english = prompt("Enter the English obtain Number");
var computer = prompt("Enter the computer obtain Number");
var urdu = prompt("Enter the Urdu obtain Number");
var pakStudy = prompt("Enter the Pak Study obtain Number");
math = Number(math);
english = Number(english);
computer = Number(computer);
urdu = Number(urdu);
pakStudy = Number(pakStudy);
var obtainedMarks = math + english + computer + urdu + pakStudy;
var percentage = obtainedMarks*100/totalMarks

if (percentage >80) { alert ("You are Obatined Mark is  = " + obtainedMarks + " Parcentage = " + percentage + " you Grade is: " + "A");
}
else if (percentage >70) { alert ("You are Obatined Mark is  = " + obtainedMarks + " Parcentage = " + percentage + " you Grade is: " + "B");
}
else if (percentage >60) { alert ("You are Obatined Mark is  = " + obtainedMarks + " Parcentage = " + percentage + " you Grade is: "  + "C");
}
else if (percentage >50) { alert ("You are Obatined Mark is  = " + obtainedMarks + " Parcentage = " + percentage + " you Grade is: " + "D");
}
else { alert("Sorry batter luck Next time now your failed");
}