// Create an array of times (in minutes) that different tasks take to complete.
// Write a program to find out how many full hours and leftover minutes each task takes 
// using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

let min=[60,30,40,70,90];
sum=0;
for(i=0;i<min.length;i++){
sum=sum+min[i];
}
let div=sum/60;
let hrs=Math.floor(div)
let mod=sum%60;


console.log(hrs +" Hours "+mod+" minits")