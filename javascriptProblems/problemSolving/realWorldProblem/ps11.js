// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities.
// Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
let array=[];
expenses = [
    { rent: 1200, groceries: 500, utilities: 200 },

    { rent: 830, groceries: 400, utilities: 150 },

    { rent: 1400, groceries: 500, utilities: 200 },

    { rent: 850, groceries: 400, utilities: 150 },

    { rent: 1600, groceries: 500, utilities: 200 },

    { rent: 870, groceries: 400, utilities: 150 },

    { rent: 1800, groceries: 500, utilities: 200 },

    { rent: 890, groceries: 400, utilities: 150 },
    
    ]
    for(i=0;i<expenses.length;i++){
        sum=expenses[i].rent+expenses[i].groceries+expenses[i].utilities;
        array.push(sum);
    }
    
    console.log(array)