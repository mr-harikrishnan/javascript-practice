// Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions,
// find the region with the highest number of soldiers.

arraySoldiers=[120, 300, 250, 180, 150]

b=arraySoldiers[0];
for(i=1;i<arraySoldiers.length;i++){
    if(arraySoldiers[i]>b){
        b=arraySoldiers[i]
    }
}
console.log(b);
