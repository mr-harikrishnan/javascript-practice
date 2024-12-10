
let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 6];

for ( i = 0; i < b.length; i++) {
    let isDub = true;
    for ( j = 0; j < a.length; j++) {
        if (b[i] === a[j]) { 
            isDub = false; 
            break; 
        }
    }

    if (isDub) {
        a[a.length]=(b[i]);
        console.log(a.length);
    }
}

