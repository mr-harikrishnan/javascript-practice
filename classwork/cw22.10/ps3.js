function array(a){

   
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    console.log(a)
}
array(["apple","zebra","ball","yash","cat","x-ray","dolphin","wall"])