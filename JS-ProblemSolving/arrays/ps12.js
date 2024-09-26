// You have an array of people ages. Write a function that filters out people who are 18 years old or older.

ageEligible=[12,18,26,10,83,17,19];
for(i=0;i<ageEligible.length;i++){
    if(ageEligible[i]>=18){
        console.log(ageEligible[i])
    }
}