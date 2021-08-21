var readlineSync = require("readline-sync");

var n = readlineSync.question("How many students name you have to enter? ");
var name= [];
var unitMarks = [];
var preFinalMarks = [];
var finalMarks = [];
var sum = [];

for(i = 0; i < Number(n); i++){
  name.push(getName(i));
  unitMarks.push(getUnitMarks(i));
  preFinalMarks.push(getPreFinalMarks(i));
  finalMarks.push(getFinalMarks(i));  
}
getSum();
getMaxMarks();
getAverage();

function getName(i){
  var name = readlineSync.question("Enter the student name "+i+" : ");
  return name;  
}

function getUnitMarks(i){
  var unitMarks = readlineSync.question("Enter unit marks of student "+i+" : ");
  return Number(unitMarks);
}

function getPreFinalMarks(i){
  var preFinalMarks = readlineSync.question("Enter pre final marks of student "+i+" : ");
  return Number(preFinalMarks);
}

function getFinalMarks(i){
  var finalMarks = readlineSync.question("Enter final marks of student "+i+" : ");
  return Number(finalMarks);
}

function getSum(){
  for(i = 0; i < Number(n); i++){
    var total = unitMarks[i] + preFinalMarks[i] + finalMarks[i];
    sum.push(total);
  }
}

function getMaxMarks(){
  for(i = 0; i < Number(n); i++){
    max = sum[0];
    if(max < sum[i])
      max = sum[i]; 
  }
  for(i = 0; i < Number(n); i++)
     if(max === sum[i])
      console.log("Maximum score is "+max+" scored by "+ name[i])
}
var classTotal = 0;
function getAverage(){
  for(i = 0; i < Number(n); i++){
    classTotal += sum[i];
  }
  var avg = classTotal / Number(n);
  console.log("The average of the class is ", avg);
}
