var course1 = +prompt("Enter 1st Course Num", 70);
var course2 = +prompt("Enter 2nd Course Num", 60);
var course3 = +prompt("Enter 3rd Course Num", 90);
var course4 = +prompt("Enter 4th Course Num", 80);
var course5 = +prompt("Enter 5th Course Num", 50);
var totalMarks = 500;
var obtainMarks = course1+course2+course3+course4+course5;
var percentage = obtainMarks/totalMarks*100;

switch(true){
    case percentage>= 90:
        alert('Grade A+')
        break
    case percentage>=75:
        alert('Grade A')
        break
    case percentage>=60:
        alert('Grade B')
        break
    case percentage>=45:
        alert('Grade C')
        break
    case percentage>=30:
        alert('Grade D')
        break
    default:
        alert('Fail')
        break
}