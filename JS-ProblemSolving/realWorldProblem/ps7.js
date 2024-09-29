// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. 
// If there are multiple modes, print any one of them.

maxCount=0;

num=[1,2,3,1,2,3,8,5,2,6,9,2,2,4,6,7,4,];
for(i=0;i<num.length;i++){
    count=0
   
    for(j=0;j<num.length;j++){
        if(num[j]===num[i]){
            count=count+1;
        }
    }
    
    if(count>maxCount){
        maxCount=count;
        mode=num[i]
    }
  





}
console.log(mode);