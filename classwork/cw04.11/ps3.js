function pat(n){
    for(i=1;i<=n;i++){
        let str="";
        for(j=n-i;j>=1;j--){
            str=str+" "
        }
        for(l=1;l<=i;l++){
            if(i%2===0){
                str=str+"* "
            }
            else{
                str=str+i+" "
            }
        }
        console.log(str)
    }

}
pat(4)