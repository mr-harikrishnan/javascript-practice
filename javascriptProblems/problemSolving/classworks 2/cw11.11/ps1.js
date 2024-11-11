function printStar(n) {
    for(i=1;i<=n;i++){
        let str="";
        for(j=i;j<n;j++){
            str=str+" "
        }
        for(k=1;k<=i;k++){
            str=str+k+" "
        }
        console.log(str)
    }
    
  for(let l=1;l<n;l++){
      let str1=""
      for(let m=1;m<=l;m++){
          str1=str1+" ";
      }
      
      for(let o=1;o<=n-l;o++){
          str1=str1+o+" "
      }
      console.log(str1)
  }
}
printStar(3)