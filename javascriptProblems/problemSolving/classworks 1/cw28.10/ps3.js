// Count the number of occurrences of a string s2 in a string s1. For example s1 = "This is a String" s2 = "is", number of occurences is 2. 

function string(a,b){
    let count=0;

    let v=b.split("");

    let x=v[0];
    let y=v[1]

let ans=a.split("")
for(i=0;i<a.length;i++){
    if(a[i]===x){
        if(a[i+1]===y){
            count++
        }
    }
}
console.log(count)

}
string("This is a in in String","in")