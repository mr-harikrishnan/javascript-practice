arr=[1,2,3,4,5,6,7,8,9];
let target=9;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;i++){
        if(arr[i]+arr[j]==target){
            console.log(arr[i],arr[j])
        }
    }
}
