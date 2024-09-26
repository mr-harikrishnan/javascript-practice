// You have an array of integers. Write a function that returns the count of the even numbers in the array

int=[1,2,3,4,5,6,7,8,9]
count=0;
for(i=0;i<int.length;i++){
    if(int[i]%2==0){
count++
    }
}
console.log(count);