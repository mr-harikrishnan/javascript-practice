let b = 2;

function table(n) {

    for (i = 1; i <= n; i++) {
       let s=i*b;
       console.log(i+"*"+b+"="+s);
    }
}
table(16);