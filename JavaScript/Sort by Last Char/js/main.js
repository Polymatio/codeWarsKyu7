// Create a function that sorts alphabetically
// The split metheod will be used to divide the string, sort method is used to return the element of the string, and the charCodeAt method will return the number of the string given index

function last(x) {
    return x.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}