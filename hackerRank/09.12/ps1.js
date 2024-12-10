// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true


function kangaroo(x1, v1, x2, v2) {
    // Check if the second kangaroo is ahead and jumps farther or equally
    if (v1 <= v2 && x1 < x2) {
        return "NO";
    }
    
    // Check if they'll meet after some number of jumps
    while (x1 <= x2) {
        if (x1 === x2) {
            return "YES";
        }
        x1 += v1;
        x2 += v2;
    }
    
    return "NO";
}

// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCount=0;
    let orangesCount=0;
    for(let i=0;i<apples.length;i++){
        let ans=a+apples[i];
        if(ans>=s && t>=ans){
           applesCount++ 
        }
    }
    
    for(let j=0;j<oranges.length;j++){
        let ans=b+oranges[j];
        if(ans>=s && t>=ans){
            orangesCount++
        }
    }
    
    console.log(applesCount)
    console.log(orangesCount)
    
    

}
