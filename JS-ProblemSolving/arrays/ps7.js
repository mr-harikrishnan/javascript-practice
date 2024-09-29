// Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land,
// check if any two helicopters are scheduled to land at the same time.

landingTimes=[12, 15, 12, 18, 20];
let len1=landingTimes.length;
let moveSet= new Set([...landingTimes]);
let len2=moveSet.size

if(len1===len2){
    console.log("Not land at same time");
}

else{
    console.log("land at same time")
}

