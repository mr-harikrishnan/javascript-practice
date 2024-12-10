function insertionSort(arr) {
 let a=arr;
 console.log(a)
for(i=1;i<a.length;i++){
    let k=a[i]
    let j=i-1
    if(j>=0 && j>k){
        a[j+1]=a[j]
        j--;
    }
}

   
}

// Example usage
const arr = [4, 1, 9, 3, 6];
insertionSort(arr);
