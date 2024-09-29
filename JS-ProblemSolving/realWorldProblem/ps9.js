// Create an array of 10 objects with keys principal, 
// rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. 
// Print this array.
array=[];
let simpleInterest=[
   {
    principal : 10000, rateOfInterest : 5, noOfYears: 4
   },
   {
    principal : 12000, rateOfInterest : 6, noOfYears: 5
   },
   {
    principal : 14000, rateOfInterest : 7, noOfYears: 6
   },
   {
    principal : 16000, rateOfInterest : 8, noOfYears: 7
   },
   {
    principal : 18000, rateOfInterest : 9, noOfYears: 8
   },
   {
    principal : 20000, rateOfInterest : 10, noOfYears: 9
   },
   {
    principal : 22000, rateOfInterest : 11, noOfYears: 10
   },
   {
    principal : 24000, rateOfInterest : 12, noOfYears: 11
   },
   {
    principal : 26000, rateOfInterest : 13, noOfYears: 12
   },
   {
    principal : 28000, rateOfInterest : 14, noOfYears: 13
   }
]
for(i=0;i<simpleInterest.length;i++){
   let mul=simpleInterest[i].principal*simpleInterest[i].rateOfInterest*simpleInterest[i].noOfYears
   let div=mul/100;
  
   array.push(div)
}
console.log(array);