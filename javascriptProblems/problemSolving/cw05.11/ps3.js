// Reverse a string without using library functions.


function rev(a){
    let join=""
    for(i=a.length-1;i>=0;i--){
join=join+a[i]
    }
    console.log(join)
}
rev("hari")