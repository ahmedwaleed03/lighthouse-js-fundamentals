const instructorWithLongestName = function (instructors) {
  // element with the longest name
  var longestName = 0;

  // loop through the objects to determine the longest name
  for (var i = 0; i < instructors.length; i++) {
    if ((instructors[longestName].name).length < (instructors[i].name).length) {
      longestName = i;
    }
  }

  return instructors[longestName];
};

// test the function
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));