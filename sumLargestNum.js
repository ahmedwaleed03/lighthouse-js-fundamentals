const sumLargestNumbers = function (data) {
  // store the higest sum
  var sum = 0;

  // nested loop to add every element with each other then assign the higest sum to the sum var
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = i + 1; j < data.length; j++) {
      var tempSum = data[i] + data[j];
      if (tempSum > sum) {
        sum = tempSum;
      }
    }
  }
  return sum;
};


// test function
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
