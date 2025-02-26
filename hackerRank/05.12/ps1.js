
// Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    let a=s.split(":");
    let sp=a[2]
    
    if(sp[2]=="P" && Number(a[0])<12){
        a[0]=Number(a[0])+12;
        return a.join(":").slice(0,8)
    }
    
    else if(sp[2]=="A" && Number(a[0])==12){
        a[0]="00"
        return a.join(":").slice(0,8)
    }
    
    else{
        return s.slice(0,8)
    }
}


// link   https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true


// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Sample Input 0

// 5 6 7
// 3 6 10
// Sample Output 0

// 1 1

function compareTriplets(a, b) {
    let alice=0;
    let bob=0;
    let arr=[]
    if(a.length==b.length){
        
        for(let i=0;i<a.length;i++){
            if(a[i]>b[i]){
                alice++
            }
            else if(a[i]<b[i]){
                bob++
            }
            
            
        }
        arr.push(alice);
        arr.push(bob);
        return arr;
        
    }
    }


    // link   https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true