// Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank,
// find the tank with the lowest water level.

waterLlevels=[30, 50, 20, 40, 60];
b=waterLlevels[0];
for(i=1;i<waterLlevels.length;i++){
    if(b>waterLlevels[i]){
        b=waterLlevels[i];
    }
    
}
console.log(b);