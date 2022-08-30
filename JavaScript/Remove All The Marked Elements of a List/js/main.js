// Create a method to remove the arrays in the second set.
// Use a filter method on the given array to remove the elements in the second set.
// Also by using the includes method to return elements that are true or false.
// It will return the arrays that are in the second set.

Array.prototype.remove_ = (integer_list, values_list) =>
    integer_list.filter(element => !values_list.includes(element));