// Sum of First N Odd Numbers:*
//    - Calculate the sum of the first n odd
let sum = 0;
function odd(a) {
    
    for (i = 1; i <a*2; i++) {
        if (i % 2 == 1) {
            console.log(i)
            sum = sum + i;
        }
    }
}
odd(6)
console.log(sum);
