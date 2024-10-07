// first three largest number in unsorted array
a=[21,42,51,24,85,89,13]
let first=3;
let c=a.sort(function (a,b){
    return b-a;
})

console.log(c)

for(i=0;i<first;i++){
    console.log(a[i])
}

