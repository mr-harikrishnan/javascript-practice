//split and add

let d=98652;
let add=0;
while(d>0){
    let x=(d%10);
    add=add+x;
    d=Math.floor(d/10);
}
console.log(add);