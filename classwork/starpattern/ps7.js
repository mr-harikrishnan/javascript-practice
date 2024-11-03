// 1             1

// 2 2       2 2

// 3 3 3 3 3 3
function pat(n){
    for(i=1;i<=n;i++){
        let str="";
        for(j=1;j<=i;j++){
            str=str+i+" ";
        }
        for(k=1;k<=n-i;k++){
            str=str+"  "
        }
        for(l=1;l<=n-i;l++){
            str=str+"  "
        }

        for(m=1;m<=i;m++){
            str=str+i+" ";
        }

        console.log(str)

    }
    
}
pat(3)