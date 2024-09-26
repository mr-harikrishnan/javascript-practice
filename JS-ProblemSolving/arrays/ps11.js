// You are given an array of student grades. Write a function that calculates the average grade.

studentGrades=[65,85,99,90,52];
add=0;

for(i=0;i<studentGrades.length;i++){
    add=add+studentGrades[i];
}
avr=add/studentGrades.length;
console.log(avr+"%");