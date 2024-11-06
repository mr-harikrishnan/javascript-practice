


// let a="*";
// let str=" ";
// let sp=" ";
// let g="g"

// for(i=1;i<=3;i++){
//     for(j=1;j<2;j++){
//         str=str+a+sp;
//     }
//     console.log(str)
// }

// let ans=sp+sp+a;
// console.log(ans)
// ans=sp+a+a;
// console.log(ans)
// ans=a+a+a;
// console.log(ans);

let a = "*";
let sp = " ";
let n = 3;

for (let i = 1; i <= n; i++) {
  let str = sp.repeat(n - i) + a.repeat(i).split("").join(" ");
  console.log(`"${str}"`); // Quotation marks to visualize spaces
}
