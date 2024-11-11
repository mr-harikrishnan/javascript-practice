// Find the second maximum in an array of integers

function array(a){

    a.sort(function(a,b){return a - b})
  let ans=a[a.length-2]
   console.log(ans)

}

array([12,45,23,89,14,87,11,1,56])