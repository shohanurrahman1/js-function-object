/* 
function functionName(parameter) {
    function body
    return
}
var returnValue = functionName(parameter value);
*/

function getAverage (assignment1, assignment2, assignment3, assignment4,  assignment5) {
    const total = assignment1 + assignment2 + assignment3 + assignment4 + assignment5;
    const average = total / 5;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 60;
const assignment3Marks = 27;
const assignment4Marks = 50;
const assignment5Marks = 60;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks, assignment4Marks, assignment5Marks);
console.log('My Average sor far:', myAverage);