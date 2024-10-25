function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {  // change aero direction
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        console.log(mid);
        break;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    
  }

  binarySearch([1,3,5,7,9,2,4,6,8,10,12,14,16,18,20], 12)