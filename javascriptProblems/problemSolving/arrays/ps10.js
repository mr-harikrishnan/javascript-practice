// You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

dailyExpenses=[450,857,379,875,978,643,975];
add=0;

for(i=0;i<dailyExpenses.length;i++){
    add=add+dailyExpenses[i];
}
console.log(add);