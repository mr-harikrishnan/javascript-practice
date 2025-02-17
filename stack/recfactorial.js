function star(n,i=1,star=""){
    if(n>0){
        return;
    }
    else{
        star="*"
        console.log(star)
        return star(n,i+1,star)
    }

}
star(5)


