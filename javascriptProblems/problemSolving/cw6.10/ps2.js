
a=[1,2,3,4,5,6,7,8,9];
let k=9;

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]+a[j]==k){
            console.log(a[i],a[j])
        }
    }
}