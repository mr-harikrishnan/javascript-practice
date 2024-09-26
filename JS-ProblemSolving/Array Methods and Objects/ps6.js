// Write a program to create an array of 4 numbers. Use pop() to 
// remove the elements one by one and store them in a new array in reverse order. Print the reversed array.

// let num=[6,9,2,1,5,7];
// emty=[];
// for(i=1;i<=num.length;i++){
//     emty.push(num[num.length-i])
// }

// console.log(emty);

let lis=[5,6,2,1,8,7];
let ad=[]
let fd=0;
for(i=0;i<=lis.length+4;i++){
    fd=lis.pop();
    ad.push(fd);
}
console.log(ad)
