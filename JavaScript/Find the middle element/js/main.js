// Create a function that finds the middle element in the array
// It will be an array to find the index in the triplet array
// The sort method to get the index but will use indexOf method to prevent it from mutating
// Return the array to find the middle array in the function


function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}