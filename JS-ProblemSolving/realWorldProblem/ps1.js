// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.

examScores=[87,64,96,37,97];
len=examScores.length;
add=0;
for(i=0;i<len;i++){
add=add+examScores[i];
}
div=add/len;
console.log(div+"%")
