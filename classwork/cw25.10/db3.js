function findAlphabeticallyFirst(arr) {
    let first =arr[0]; // change first value
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < first) { // change direction
        first = arr[i];
      }
    }
   console.log(first)
  }
  findAlphabeticallyFirst(["zebra","yash","ball","x-ray","cat","apple"])

