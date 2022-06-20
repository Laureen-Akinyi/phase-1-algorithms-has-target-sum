function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array){
    const complement = target - number;

    if(complement in seenNumbers)
     return true
     
  }
  return false
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  space complexity = 0(1)
  time complexity = 0(n^2)
*/

/* 
  Add your pseudocode here
  create a function hasTargetSum that takes in two argument that is an array integer and a target integer
  The function should check if two numbers add up to the target integer
  If it adds up to the target the return value should be true
  Else return false
*/

/*
  Add written explanation of your solution here
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4,8],3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4],5));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3],4));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4],4));
}

module.exports = hasTargetSum;
