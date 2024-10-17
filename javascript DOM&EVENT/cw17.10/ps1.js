// DEBUGING
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {  //change n/i,j--/j++;
            row += '*';
        }
        console.log(row);
    }
}

// Example usage
let n = 5;
printTriangle(n);