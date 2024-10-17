// debiging

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <num; i++) { //change aero direction
        if (num % i === 0) { // change ===1/===0;
            return false;
        }
    }
    return true;
}

// Example usage
let num = 30;
console.log(isPrime(num));