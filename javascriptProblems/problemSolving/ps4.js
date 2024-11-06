const numbers = [45, 23, 89, 12, 67, 98, 34, 76, 55];
// Sorting the array in descending order using a for loop
for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] < numbers[j]) {
            
            // Swap the numbers
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
            console.log(numbers)

        }
    }
}
// Print the greatest three numbers
console.log('The greatest three numbers are:', numbers[0], numbers[1], numbers[2]);
