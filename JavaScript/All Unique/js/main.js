// Create a function that contains only unique characters.

function hasUniqueChars(str) {
    return new Set(str).size == str.length
}