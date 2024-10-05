function word(a){
    let arr1=[];
    let arr2=[];
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            arr1.push(a[i])
        }
        else{
            arr2.push(a[i])
        }
    }
    console.log(arr1);
    console.log(arr2)

}
word(arr=[6,4,8,3,2,6,8,9,6,3,2])