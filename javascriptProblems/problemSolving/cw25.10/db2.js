function findMax(arr) {
    let max = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) { //change direction
        max = arr[i];
      }
    }
    console.log(max)
  }
  findMax([12,45,78,23,1,2,89,99,25,29])