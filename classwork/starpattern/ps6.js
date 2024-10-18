let n=4;
 for(i=1;i<=n;i++){
    let str="";
    for(j=i;j<i+i;j++){
        if(j%2==1){
            str=str+"1 "
        }

        else{
            str=str+"0 "
        }
       
    }
    console.log(str)
 }