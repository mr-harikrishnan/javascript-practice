// Print the different between the maximum and minimum element in a given array.

function array(a){

    let min=a.sort(function(a,b){return a - b})
 let b=a[0];
 let c=a[a.length-1];
 let ans=c-b;
 console.log(ans)

}
array([12,45,23,89,14,87,11,1,56])