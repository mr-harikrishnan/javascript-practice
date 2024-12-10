// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33

function gradingStudents(grades) {
    let a=grades;
    let arr=[];
    for(let i=0;i<a.length;i++){
        if(a[i]>=38){
            let ans=Math.ceil(a[i]/5)*5
            var c=ans-a[i];
            if(c<3){
                arr.push(ans)
            }
            else{
                arr.push(a[i])
            }
        }
        
        else{
            arr.push(a[i])
        }
        
        
    }
    return arr

}

// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true


// #
// ##
// ###
// ####

function staircase(n) {
    
   
    for(let i=1;i<=n;i++){
        let str=""
        
        for(let j=i;j<n;j++){
            str=str+" "
        }
        
        for(let k=1;k<=i;k++){
            str=str+"#";
        }
        console.log(str)
    }

}

// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true