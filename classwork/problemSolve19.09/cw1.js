let  num=826534;
let sum=0;
while(num>0){
    let x=num%10;
    sum=sum+x;
    num=Math.trunc(num/10);
   
}
console.log(sum);






let jo=875749;
let a=jo.toString();
let b=a.split('');
let d=b.map(Number);
console.log(d)
add=0;
for(i=0;i<d.length;i++){
add=add+d[i];
}
console.log(add);