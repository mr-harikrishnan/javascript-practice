let n=4;
for(i=1;i<=n;i++){
    let str="";
for(k=1;k<=n-i;k++){
    str=str+" "
}

    for(j=1;j<=i;j++){
        str=str+i+" "
    }
    console.log(str)
}