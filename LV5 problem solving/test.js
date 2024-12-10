function selection(a){
    for(i=0;i<a.length;i++){
        let b=i
        for(j=i+1;j<a.length;j++){
         if(a[b]>a[j]){
            b=j
         }  
        }

        [a[i],a[b]]=[a[b],a[i]]
    }
    console.log(a)
}
selection([2,5,1,4,9,3])