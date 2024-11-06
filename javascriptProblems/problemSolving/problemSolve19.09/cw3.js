function num(a) {
    let b = a.toString();
    let c = b.split('');
    let d = c.map(Number);

    sum = 0;
    for (i = 0; i < d.length; i++) {
        sum = sum + d[i];

    }
    console.log(sum);
}
num(767465)



function total(num) {
    sum1 = 0;
    while (0 < num) {
        let g = num % 10;
        sum1 = sum1 + g;
        num= Math.trunc(num / 10);
    }
    console.log(sum1);
}


total(986632)