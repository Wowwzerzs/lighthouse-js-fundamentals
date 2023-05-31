const judgeVegetable = function (veggies, characteristic) {
  let bestVegetable = null;
  let highestRanking = 0;

  for (let i = 0; i < veggies.length; i++) {
    const vegetable = veggies[i];

    if (vegetable[characteristic] > highestRanking) {
      highestRanking = vegetable[characteristic];
      bestVegetable = vegetable.submitter;
    }
  }

  return bestVegetable;
}
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
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
