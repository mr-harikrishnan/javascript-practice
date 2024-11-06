// number k irundha cut

a=[2,3,4,5,6,7];
k=5;
arr=[];
// let c=a.filter(x=> x !==k);
// console.log(c)
for(i=0;i<a.length;i++){
    if(a[i] !==k){
arr.push(a[i])
    }
}
console.log(arr)