//    Let a be a year, write a program to check whether this year is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.
// The rule for determining a leap year is:
// 1.The year must be divisible by 4.
// 2.However, if the year is also divisible by 100, it is not a leap year unless...
// 3.The year is also divisible by 400, in which case it is a leap year.

let a = 2024;
leapYear(a)
function leapYear(a){
    if(a%4===0 || a%400===0){
        console.log("Y");
    }
    else if(a%100===0){
        console.log("N");
    }
    else {
        console.log("not leap");
    }
}