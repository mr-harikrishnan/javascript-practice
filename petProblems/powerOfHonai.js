function towerOfHonai(n,s,t,d){
    if(n==1){
        console.log("disk move to"+s+"to"+d)
    }
    else{
        towerOfHonai(n-1,s,d,t)
        console.log("disk move to"+s+"to"+d)
        towerOfHonai(n-1,t,s,d)

    }
}

towerOfHonai(2,1,2,3)
