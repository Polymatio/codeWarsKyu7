/*Assign vampireTest to a function*/
/*Add each number and use the split method to seperate each individual number*/
/*Sort method will sort the numbers*/
/*Join the numbers and combined them together*/
/*Have the numbers to be equal to the product and  multiplicands using the same methods*/

let vampireTest = function(a, b) {
    return (''+a+b).split('').sort().join() == (a*b+'').split('').sort().join();
}