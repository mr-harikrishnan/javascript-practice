function isPrime(a){
let isPrime=true;
if(a==2){
    return true;
}

else{
    for(i=2;i<=Math.sqrt(a);i++){
        if(a%i==0){
            return false;
            isPrime=false;
        }
    }
}
if(isPrime){
    return true;
}
}
console.log(isPrime(169))