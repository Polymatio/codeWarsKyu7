// Create a function to filter the number
// Will use parseInt function to parses a string argument into an integer
// The replace method will be used to remove the string patterns with integers
// Return integers instead of strings

let filterString = function(value) {
    return parseInt(value.replace(/[A-Z]/gi, ''))
}