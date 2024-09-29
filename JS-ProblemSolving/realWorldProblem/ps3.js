// Write a program that stores an array of 3 decimal numbers.
// Convert each number to its binary equivalent using the toString(2) 
// method and print the binary values.

let a=[3,2,5,15];
let len=a.length;
for(i=0;i<len;i++){
    bin=a[i].toString(2);
    console.log(bin);
}