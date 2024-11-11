// Given a array of string return the String which has the maximum length. 
// arr = ["Ram", "Abraham", "Peter"] output is Abraham

function maximum(a){
    let max=a[0];
    for(i=1;i<a.length;i++){
        if(max.length<a[i].length){
            max=a[i]
        }
    }
    console.log(max)

}
maximum(["Ram", "Abraham", "Peter"])