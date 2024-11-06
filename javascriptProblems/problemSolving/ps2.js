// Given The value in celsious convert to Fharenhit;
// Given The value in Fharenhit convert to celsious;


function changeT(T,val){
  if(T==="C"){
    F=val * (9/5) + 32;
    console.log(F)
  }

  else if(T==="F"){
    C=(val-32) * (5/9);
    
    console.log(Math.floor(C))
  }
}
changeT("F",40)