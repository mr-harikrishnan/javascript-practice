p=[2,23,5,4,35,63,23,78];

for(i=0;i<p.length;i++){
    let num=p[i];
    if(num==2){
    console.log(num)
    }
    
    else if(num>2){
        let isPrime=true;
        
        for(j=2;j<num;j++){
        if(num%j==0){
            isPrime=false;
        }
        }
        
        if(isPrime){
            console.log(num)
        }
    }
}
