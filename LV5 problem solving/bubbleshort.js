function bub(a){
let count=0

for(k=0;k<a.length;k++){
count++

   for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
if(a[i]>a[j]){
    temp=a[i]
    a[i]=a[j]
    a[j]=temp
}
    }
   }

   break;

}
   console.log(a)
   console.log(count)
}
bub([3,1,6,8,2,4,7,9])