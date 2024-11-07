// Traverse the array and return the index of the first negative number encountered.

function neg(a){
    for(i=0;i<a.length;i++){
        if(a[i]<0){
            c=a[i];
            break;
        }
    }
    console.log(c)

}
neg([12,34,65,-45,67,-1,35,-78])