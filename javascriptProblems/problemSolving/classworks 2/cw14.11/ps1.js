let a=0;
let b=1;
console.log(a);
console.log(b);
let c=0
for(i=3;i<10;i++){
    c=a+b;
    console.log(c)
    a=b;
    b=c
}
console.log(c)