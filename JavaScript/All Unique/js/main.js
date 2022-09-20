// Create a function that contains only unique characters.
// Using the set.size object will allow to store unique values
// The length property will let help count the number of unique values in the string
// It will return a number of unique values in the string

function hasUniqueChars(str) {
    return new Set(str).size == str.length
}