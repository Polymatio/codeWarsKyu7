// Create a function that finds the average length of the string in the array
// asssign average to round out the array to find the average length using Math.round, join, and length method and property
// Return the string using a map and repeat methods to find repeating letters within the array

function averageLength(array) {
    let average = Math.round( array.join('').length / array.length);
    return array.map(str => str[0].repeat(average));
}