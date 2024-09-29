// Write a program that takes two arrays of numbers representing two sets.
// Create a new array that represents the union of both sets (without duplicates) and print the result.

arr1=[1,3,5,7,4];
arr2=[2,3,4,1,7];

ans=[...new Set([...arr1,...arr2])];
console.log(ans);
