
function array(a){
    let t=7;
    for(let i=0;i<a.length;i++){

       for(let j = 0; j < a[i].length; j++){

        if(t===a[i][j]){
            console.log(i,j)
        }
       }
    }
   
}
array([[2,4],[4,6],[7,9]])

