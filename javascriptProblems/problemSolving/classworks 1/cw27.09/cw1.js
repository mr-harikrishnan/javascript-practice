// Given an array of integers find the number of multiples of 5.

int=[65,86,64,85,64];
len=int.length;

for(i=0;i<len;i++){
    if(int[i]%5==0){
        console.log(int[i]);
    }
}