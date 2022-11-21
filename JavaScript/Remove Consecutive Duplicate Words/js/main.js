// Create a function to remove all consecutive duplicate words
// Using the split method to split the word
// The filter method is used to find if their is no repeating word before it
// Join method will connect the word back to after the filter case is finish and return

function removeDuplicateWords(str) {
    return str.split(" ").filter((w, i, a) => w != a[i - 1]).join(" ")
}