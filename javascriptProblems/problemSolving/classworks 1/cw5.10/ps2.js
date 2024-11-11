
//same num count

a=[2, 3, 4, 2, 3,5];
let count=0;
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            count=count+1
        }
    }
}
console.log(count)
