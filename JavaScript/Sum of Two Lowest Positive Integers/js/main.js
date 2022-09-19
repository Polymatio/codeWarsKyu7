// Create a function to sum two lowest integers
// By using the sort method it will arrange the elements of the array
// The function inside the sort method will prevent incorrect ordering in case of a number string
// First return will correct the array ordering from last to greatest
// Second return will sum the two lowest numbers in the array
// Console log will allow the second returned integer to be visible

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort(function(a,b){
      return a - b;
  });
  
  return numbers[0] + numbers[1];
  };

  console.log(sumTwoSmallestNumbers([1,5,8,2,4]))