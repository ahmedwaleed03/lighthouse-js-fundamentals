// function
const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });

  return vegetables[0].submitter;
}

// test the function
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));