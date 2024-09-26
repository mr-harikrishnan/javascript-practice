// Given the array temperatures=[75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest,
// identify which regions have temperatures above 80 degrees.

temperatures=[75, 80, 72, 85, 90];
b=80;

for(i=0;i<temperatures.length;i++){
    if(b>temperatures[i]){
        console.log(temperatures[i]);
    }
}