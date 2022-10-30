// Create a function that converts the array of a string into an array of a number
// Return stringarray using map method and parseFloat function create new arrays and adding integers with floats

function toNumberArray(stringarray) {
    return stringarray.map(parseFloat);
}