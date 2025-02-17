// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
// Example
// a [2,6]
// b = [24,36]
// There are two numbers between the arrays: 6 and 12.
// 6%20,6%6 = 0, 24%6 0 and 36%6 = 0 for the first value.
// 12%20, 12%6 = 0 and 24%12 = 0,36%12 = 0 for the second value. Return 2.
// Function Description
// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.
// getTotalX has the following parameter(s):
// • int a[n]: an array of integers
// • int b[m]: an array of integers
// Returns
// • int: the number of integers that are between the sets

function breakingRecords(scores) {
    // Write your code here
    let a=scores;
    let mins=a[0]
    let maxs=a[0];
    let mincount=0
    let maxcount=0
    
    for (let i=1;i<a.length;i++){
        
        if(mins>a[i]){
            mincount++;
            mins=a[i]
        }
        
        if(maxs<a[i]){
            maxcount++;
            maxs=a[i]
        }
    }
    return [maxcount,mincount]

}

// link:https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true


// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where
// i < j and ar[i] + ar[j] is divisible by k.
// Example
// ar = [1, 2, 3, 4, 5, 6]
// k=5
// Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].
// Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
// • int n: the length of array ar
// • int ar[n]: an array of integers
// • int k: the integer divisor
// Returns
// int: the number of pairs
// Input Format
// The first line contains 2 space-separated integers, n and k.
// The second line contains n space-separated integers, each a value of arr[i].
// Constraints
// • 2 < n < 100
// • 1 <k<100
// • 1 ≤ ar[i] < 100


function divisibleSumPairs(n, k, ar) {
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let ans=ar[i]+ar[j]
            if(ans%k==0){
                count++
            }
        }
    }
    return count
    
    }

    // link:https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true