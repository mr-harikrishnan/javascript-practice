a = [2, 4, 6,6]
b = [1, 3, 5, 5,7, 9]
arr = []
for (let i = 0; i < a.length; i++) {
    let isGo = true
    for (let j = 0; j < arr.length; j++) {
        if (a[i] == arr[j]) {
            isGo = false
        }

    }
    arr.push(a[i])
}

for (let i = 0; i < b.length; i++) {
    let isGo = true
    for (let j = 0; j < arr.length; j++) {
        if (b[i] == arr[j]) {
            isGo = false
        }

    }
    arr.push(b[i])
}

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]

        }
    }
}
console.log(arr)



