// solution 1
/* function hasTargetSum(array, target) {
  // Write your algorithm here

  let sum
  for(let i=0; i < array.length; i++){
    // n
     for(let j=i+1; j<array.length; j++){
      // n * n
       if(sum === target) break

       else sum = array[i] + array[j]
 
     }
  }
  return sum === target
} */

// solution 2 
function hasTargetSum(array, target){
  const seenNumbers = {}
  for(const number of array){
    const complement = target - number
     if(complement in seenNumbers) return true
     seenNumbers[number] = true
  }
 return false
}


/* 
  Write the Big O time complexity of your function here
  solution 1 {
  Runtime: O(n^2)
  space: O(n)
  }

  solution2 {
    Runtime: O(n)
    space: O(n)
  }
*/

/* 
  Add your pseudocode here
  solution 1 {
  define a variable to hold the sum.

  itrate over the array 
   use another itration for the rest of the elements
    then add the first element with the rest of elements 
    then the secound with the rest and so on 
      if find a pair that match the target then break.}

  solution 2 {
   create an object to keep track of numbers we've already seen
    iterate through each number in the array
     check the current num, identify a complement that adds to the target (comp = target - num)
      if so, return true
       otherwise, add that number to the object.

  }
     
*/

/*
  Add written explanation of your solution here

  define a function called hasTargetSum and take two arguments: an array of integers 
  and a target that will be used to find a sum of two numbers that 
  equals the target and then returns true, if any pairs of numbers are found, else 
  return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
