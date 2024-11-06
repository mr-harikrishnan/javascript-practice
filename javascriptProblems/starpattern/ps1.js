let n=6;
for(i=1;i<=n;i++){
    let str="";
    for(j=1;j<=n;j++){
        if(i==1||i==n||j==1||j==n){
            str=str+"* "
        }
        else{
            str=str+"  "
        }

    }
    console.log(str)
}