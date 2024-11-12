function digitSum(num){
    
    let a=num.toString();
    let b=a.split('');
    let d=b.map(Number);
    add=0;
    for(i=0;i<d.length;i++){
    add=add+d[i];
    }
    console.log(add);
}

digitSum(8764582)

