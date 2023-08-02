const conditionalSum = function (values, condition) {
  // store the  sum
  var sum = 0;

  // loop through the array and add all the elements that match the condition
  for (var i = 0; i < values.length - 1; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    } else if (condition === "odd") {
      if (values[i] % 2 !== 0) {
        sum += values[i];
      }
    }
  }
  return sum;
};

// test the function
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));