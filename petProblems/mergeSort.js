//function to sort the given array
function mergeSort(arr) {
    if (arr.length <= 1) {
       return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
 }
  
 //function to merge the left and right elements
 function merge(left, right) {
    const result = [];
     
    while (left.length && right.length) {
       if (left[0] < right[0]) {
          result.push(left.shift());
       } else {
          result.push(right.shift());
       }
    }
     
    return [...result, ...left, ...right];
 }
 const arr = [4, 1, 5, 2, 6, 3, 7, 8];
 console.log(mergeSort(arr));