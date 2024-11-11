function repeat(a) {
    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                console.log(a[j])
            }
        }
    }
}
repeat(arr = [12, 23, 45, 56, 23, 78])