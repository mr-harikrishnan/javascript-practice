

function array(a) {
    let sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1) {
            sum=sum+a[i];
        }
    }
    return sum;
}
console.log(array(ary = [2, 4, 6, 7, 5]));
