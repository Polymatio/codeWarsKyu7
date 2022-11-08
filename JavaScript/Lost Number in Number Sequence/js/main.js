// Create a function to find the number that is deleted
// Will use a conditional statement to see if the length of arr and mixArr are the same
// If they aren't the same will create variables for arr and misArr by using the reduce method to calculate the element
// arrSum and mixSum will be be assigned to calculate arr and mixArr in that order
// It will return 0 if arr and mixArr are equal else it will calculate and return the value of sumArr and mixSum

function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) {
      return 0
    }else {
      let arrSum = arr.reduce((a,c)=> a+c, 0)
      let mixSum = mixArr.reduce((a,c)=> a+c, 0)
      return arrSum - mixSum
    }
}