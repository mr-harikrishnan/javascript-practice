// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]).
// Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

a=[true,false,true];
b=[false,true,true];
for(i=0;i<a.length;i++){
    ans=a[i]&&b[i];
    console.log(ans)
}
