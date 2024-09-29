// Given an array of strings count the number
//  of elements which are starting with a vowel

let vo=["fan","sun","unorder","apple","chery","oil","x-ray","wall"];
let len=vo.length;
let count=0;
for(let i=0;i<len;i++){
    if(vo[i][0]=="a"||vo[i][0]=="e"||vo[i][0]=="i"||vo[i][0]=="o"||vo[i][0]=="u"){
count=count+1;
    }
    
}
console.log(count);