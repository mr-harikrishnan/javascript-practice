// Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival,
// find the closest upcoming festival.
untilFestival=[30, 15, 45, 10, 25];
b=untilFestival[0];
for(i=1;i<untilFestival.length;i++){
    if(b>untilFestival[i]){
        b=untilFestival[i];
    }
}

console.log(b)
