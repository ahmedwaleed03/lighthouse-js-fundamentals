// function
const howManyHundreds = function (num) {
  // store number of hundreds
  var numHundreds = 0;

  // loop to determine how many hundreds
  while (num >= 100) {
    num -= 100;
    numHundreds++;
  }

  return numHundreds;
}

// test code
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);