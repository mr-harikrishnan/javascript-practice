function gcd(a,b){
    let min=Math.min(a,b)
    for(i=min;i>0;i--){
        if(a%i==0 && b%i==0){
            console.log(i);
            break;
        }
    }
}
gcd(15,40);