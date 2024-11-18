// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece


// input: arr = ["M 3", "J 1", "T 2"]

// Output
// 7500


// Explanation
// Sample Input
// M is Mug, J is Jeans, T is for T shirt, P is for Pen
// Sample Output
// 3 Mugs is 1500
// 1 Jeans is 3000
// 2 Tshirt is 3000

function check(cart){
  let a=cart;
  let add=0;
for(i=0;i<a.length;i++){
    let b=a[i].split("");
    if(b[i]==="M"){
        let c=b[2]
       let mul=500*c
       add=mul
    }

    if(b[i]==="J"){
        
    }
}
console.log(add)
}
check(["M 3", "J 1", "T 2"])