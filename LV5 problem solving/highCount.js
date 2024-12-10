function high(a){
    let count1=0;
    for(i=0;i<a.length;i++){
        let count2=0;
        for(j=i+1;j<a.length;i++){
            if(a[i]==a[j]){
                count2++
            }
        }

        if(count1<count2){
            ans=a[i]
            count1=count2
        }

    }
    console.log(ans)

}
high([5,5,4,1,1,5,1,1,1,6,7,8])