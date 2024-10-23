function array(a){
let min=a[0]
for(i=1;i<a.length;i++){
    if(min>a[i]){
        max=a[i]
    }
}
console.log(min)
}
array([12,34,23,98,134,67,1,90,45])