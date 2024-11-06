
// Given the array train_departures = [10, 15, 7, 20, 5], where each element
// represents the departure time of a train in 24-hour format, find the earliest train to depart.


train_departures= [10, 15, 7, 20, 5]

b=train_departures[0];
// for(i=1;i<train_departures.length;i++){
//     if(train_departures[i]<b){
//         b=train_departures[i];
//     }
// }

let i=1;
while(i<train_departures.length){
    if(train_departures[i]<b){
        b=train_departures[i]
    }
    i++;
}
console.log(b);