// function
const ageCalculator = function (name, yearOfBirth, currentYear) {
  // calculate age
  var age = currentYear - yearOfBirth;

  // return value
  return name + " is " + age + " years old.";
}

// test function
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));