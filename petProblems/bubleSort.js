a=[12,5,56,89,18,99,3]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
           [a[i],a[j]] =[a[j],a[i]]
        }
    }
}
console.log(a)