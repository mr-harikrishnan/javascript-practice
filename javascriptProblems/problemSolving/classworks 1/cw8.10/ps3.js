

function gcd(a,b){
    let l=0;
    let s=0;
    if(a>b){
        l=a;
        s=b;
    }

    else if(a<b){
        l=b;
        s=a
    }

    while(l>s){
        s=l%a
    }
    console.log(s)

}
gcd(64,32)


