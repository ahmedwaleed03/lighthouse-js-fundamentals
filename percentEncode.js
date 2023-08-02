const urlEncode = function (text) {
  var newString = "";

  // get rid of the trailing whitespaces
  text = text.trim();

  // loop through the text and replace all the spaces
  for (var i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      newString += '%20';
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));