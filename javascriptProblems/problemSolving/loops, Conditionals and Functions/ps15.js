function airplane(n,f){

 while(n>0){
  n=n-f;
  console.log("flight is="+n+"feet");
 }
 console.log("Flight arrived");
}
airplane(1000,10)