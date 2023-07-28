// function
function range(start, end, step) {
  var finalArray = [];

  if ((start === undefined || end === undefined || step === undefined) || start > end || step <= 0) {
    return finalArray;
  } else {
    for (let index = start; index <= end; index += step) {
      finalArray.push(index);
    }
  }
  return finalArray;
}


// test function
console.log("First: " + range(0, 10, 2));
console.log("\nSecond: " + range(10, 30, 5));
console.log("\nThird: " + range(-5, 2, 3));