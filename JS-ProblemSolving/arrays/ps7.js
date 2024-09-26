// Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land,
// check if any two helicopters are scheduled to land at the same time.

landingTimes=[12, 15, 12, 18, 20];

b=landingTimes[0];
for(i=1;i<landingTimes.length;i++){
    if(b==landingTimes[i]){
        b=landingTimes[i]
    }
}
console.log(b);