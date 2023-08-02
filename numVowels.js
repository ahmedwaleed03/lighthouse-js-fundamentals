const numberOfVowels = function (data) {
  // store total number of vowels
  var totalVowels = 0;

  // loop through word and count the vowels
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      totalVowels++;
    }
  }

  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));