function aldredy(a,b){
    let isValue=true;
for(i=0;i<a.length;i++){
    if(a[i]===b){
        isValue=false
    }
}

if(isValue){
    a.push(b)
}
console.log(a)
}
aldredy([2,3,4,1,5,6],9)