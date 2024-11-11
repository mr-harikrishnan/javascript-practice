// Given an array of integers, find the maximum in the array

function array(a){
max=a[0];
for(i=1;i<a.length;i++){
 if(a[i]>max){
    max=a[i]
 }
}
console.log(max)
}
array([12,34,23,98,134,67,1,90,45])