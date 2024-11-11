//   *
//  **
// ***      

let col=3;


for (let i = 1; i <= col; i++) {
    let str=" ";
    for (let j = 1; j <= col - i; j++) {
        str=str+" ";
    }
    for (let k = 1; k <= i; k++) {
        str=str+"*";
    }
    console.log(str);
}