// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

function array(a){

 let max=a[0];
 for(i=1;i<a.length;i++){
    if(max<a[i]){
        max=a[i]
    }
 }
 let ind=a.indexOf(max)
 console.log(ind)

}
array([5,4,6, 1, 2,5, 5, 3, 5])
