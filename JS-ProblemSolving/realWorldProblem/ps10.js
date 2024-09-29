// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. 
// Write a program to calculate the total marks for each student and store them in a new array. Print the new array.

let array=[];
let sum=0;
let students=[
   {
    sumject1marks:50, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:55, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:60, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:65, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:70, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:75, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:80, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:85, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:90, sumject2marks: 75, sumject3marks: 84
   },
   {
    sumject1marks:95, sumject2marks: 75, sumject3marks: 84
   }
]
for(i=0;i<students.length;i++){
    sum=students[i].sumject1marks+students[i].sumject2marks+students[i].sumject3marks;
    array.push(sum);
}

console.log(array)