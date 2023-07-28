// function
const chooseStations = function (stations) {
  // variable to store good voting stations
  let goodStations = [];

  // loop through the array
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      // save the names of the good stations
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};

// test the function
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));