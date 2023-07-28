// function
const finalPosition = function (moves) {
  var finalPosition = [0, 0];

  for (const move of moves) {
    if (move === "north") {
      finalPosition[1]++;
    } else if (move === "south") {
      finalPosition[1]--;
    } else if (move === "east") {
      finalPosition[0]++;
    } else if (move === "west") {
      finalPosition[0]--;
    }
  }

  return finalPosition;
}

// test the function
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));