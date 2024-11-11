// Given array two arrays student names and scores, return the student name who has the maximum score
//  eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function arr(a,b){
    let ch=a[0];
    for(i=1;i<a.length;i++){
        if(ch<a[i]){
            ch=a[i]
        }
    }
   
let ind=a.indexOf(ch)
let ans=b[ind];
console.log(ans)


}
arr([88, 45, 91, 90],["sanjay", "priya", "hari", "sanjana"])