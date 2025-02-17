// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.
// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.
// In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are
// either of the following:
// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.
// For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.
// Function Description
// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
// dayOfProgrammer has the following parameter(s):
// year: an integer
// Input Format
// A single integer denoting year y.
// Constraints
// 1700 \le y \le 2700
// Output Format
// Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy. where dd is the two-digit day, mm is
// the two-digit month, and yyyy is y.
// Sample Input O
// 2017
// Sample Output O
// 13.09.2017

function dayOfProgrammer(year) {
    // Write your code here
    let f=28;
    let leapyear=false;
    if(year>=1700 && year<=1917){
        if(year%4==0){
    f++
    leapyear=true
  }
  if(leapyear){
    var ans=31 + f + 31 + 30 + 31 + 30 + 31 + 31
    var ans2=256-ans
    return ans2+".09."+year
  }
  
  else if(!leapyear){
    var ans=31 + f + 31 + 30 + 31 + 30 + 31 + 31
    var ans2=256-ans
    return ans2+".09."+year
  }
    }

    
    
    if(year>=1919){
      if((year%4==0 && year%100 !== 0) || year%400==0){
    f++
    leapyear=true
  }
  if(leapyear){
    var ans=31 + f + 31 + 30 + 31 + 30 + 31 + 31
    var ans2=256-ans
    return ans2+".09."+year
  }
  
  else if(!leapyear){
    var ans=31 + f + 31 + 30 + 31 + 30 + 31 + 31
    var ans2=256-ans
    return ans2+".09."+year
  }  
    }
    
    
    else{
        return "26"+".09."+year
    }
    
  
}

// link:https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true


// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
// Example
// arr = [1, 1, 2, 2, 3]
// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
// Function Description
// Complete the migratoryBirds function in the editor below.
// migratoryBirds has the following parameter(s):
// int arr[n]: the types of birds sighted
// Returns
// int: the lowest type id of the most frequently sighted birds
// Input Format
// The first line contains an integer, n, the size of arr.
// The second line describes arr as n space-separated integers, each a type number of the bird sighted.
// Constraints
// 5 ≤ n ≤2×105
// It is guaranteed that each type is 1, 2, 3, 4, or 5.
// Sample Input O
// 6
// 144453
// Sample Output O
// 4

function migratoryBirds(arr) {
    // Write your code here
    let a=arr
  let obj={}
  for(let i=0;i<a.length;i++){
    if(obj[a[i]]){
        obj[a[i]]=obj[a[i]]+1
    }
    
    else{
        obj[a[i]]=1
    }
  }
  
  let maxCount=0;
  let maxValue=0
  for(let j of Object.keys(obj)){
    if(maxCount<obj[j]){
        maxCount=obj[j]
        maxValue=j
    }
  }
  return maxValue;

}


// link:https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

