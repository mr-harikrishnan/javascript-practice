// You are in charge of the cake for a child's birthday. You have decided the cake 
// will have one candle for each year of their total age. They will only be able to blow out the tallest of 
// the candles. Count how many candles are tallest.

// Example

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2

// The maximum height candles are  units high. There are  of them, so return .



function birthdayCakeCandles(candles) {
    // Write your code here
    let a=candles;
    let max=Math.max(...a);
    let count=1;
    for(let i=0;i<a.length;i++){
        if(max==a[i]){
            count++
        }
    }
    return count-1

}


// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//  Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {
    let a=arr.sort((a,b )=> a-b);
    let add1=0;
    let add2=0;
    let ar=[];
    for(let i=0;i<a.length-1;i++){
        add1=add1+a[i]
    }
    
    for(let j=1;j<a.length;j++){
        add2=add2+a[j];
    }
console.log(add1,add2)
}