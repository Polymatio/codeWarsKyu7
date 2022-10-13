// Create a function that contains all rotation
// Make a for loop to count the strings for a number of times
// Using indexOf and slice method will help count existing strings and count the number of new strings
// Return whether the statement is true or false whether is true or false

function containAllRots(string, arr) {
    for(let i =0; i < string.length; i++) {
        if(arr.indexOf(string.slice(i) + string.slice(0, i)) == -1) {
            return false;
        }
    }
    return true;
}