function fibonacci(n) {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (i = 1; i <= n; i++) {
        console.log(a);
        sum = a + b;
        a = b;
        b = sum;
    }

}
fibonacci(10);