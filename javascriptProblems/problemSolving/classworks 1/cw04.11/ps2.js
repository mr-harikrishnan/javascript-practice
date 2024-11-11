// Given an array find all the values less than 15 in a new array if not print No Element less than 15.  Example if 
// arr = [4, 15, 8, 25, 30] output is =>  4, 8. if ar = [19, 89, 90, 18] output => No element less than 15

function array(a){
let target=15;
let newarr=[];

for(i=0;i<a.length;i++){
    if(target>a[i]){
newarr.push(a[i]);
    }
}
if(newarr.length>0){
    console.log(newarr)
}

else if(newarr.length===0){
    console.log("No element less than 15")
}



}
array([19, 89, 90, 18,6])