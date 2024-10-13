let n=3;
for(i=1;i<=n;i++){
    let array="";
for(l=1;l<=n-i;l++){
    array=array+" ";
}
for(j=1;j<=i;j++){
    array=array+"*";
}
for(k=1;k<=n-i;k++){
    array=array+" ";
}
console.log(array)

}