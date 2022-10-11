// Create a function that returns the highest and lowest number base on string
// Assign number to number.split to seperate the numbers individually
// Return string number by using Math.max and Math.min to return the largest and smallest number while spread operator to expand for numbers

function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return Math.max(... numbers) + " " + Math.min(... numbers);
}