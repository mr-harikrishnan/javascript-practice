function calculateFactorial(n){
    mul=1;
    let i=1;
    while(n>i){
        mul=mul*n;
        n--;  
    }
    return mul;
  

}
console.log(calculateFactorial(10));