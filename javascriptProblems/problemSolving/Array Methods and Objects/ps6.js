// Write a program to create an array of 4 numbers. Use pop() to 
// remove the elements one by one and store them in a new array in reverse order. Print the reversed array.

let num=[6,9,2,1,5,7];
let emty=[];
let len=num.length;
for(i=1;i<=len;i++){
    emty.push(num[len-i])

}
console.log(emty)

