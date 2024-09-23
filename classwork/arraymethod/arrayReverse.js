

//split and reverse

//using arrey input
let num=9942;
let convert=num.split('').reverse().map(Number)
console.log(convert);


//using unarey input
let s=13568;
let digit=" ";
while(s>0){
    let x=(s%10);
    digit=digit+x;
    s=Math.floor(s/10)
}
console.log(digit);
