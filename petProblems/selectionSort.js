a=[12,45,2,78,99,23]

for(i=0;i<a.length;i++){
    let min=i;
    for(j=i+1;j<a.length;j++){
        if(a[min]>a[j]){
            min=j
        }
    }
    [a[min],a[i]]=[a[i],a[min]]
}
console.log(a)