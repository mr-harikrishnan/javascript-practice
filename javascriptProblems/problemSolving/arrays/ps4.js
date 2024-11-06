// Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years,
// calculate the average population.

arrayPopulations=[50, 60, 70, 80, 90]

add=0;
for(i=0;i<arrayPopulations.length;i++){
    add=add+arrayPopulations[i];
    
}
div=add/arrayPopulations.length
console.log(div+"%");