// for loop
/*
 const chooseStations = function (stations) {
   const goodStations = [];

   for (let i = 0; i < stations.length; i++) {
     if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
    goodStations.push(stations[i][0]);
     }
       }

  return goodStations;
}
*/ 

// for of loop
const chooseStations = function (stations) {
  const goodStations = [];
// station = stations[i][1], in for loop
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      goodStations.push(station[0]);
    }
  }

  return goodStations;

}
// array has 3 elements, indices = 0, 1, 2
const stations = [
  ['Big Bear Donair', 10, 'restaurant'], // index 0
  ['Bright Lights Elementary', 50, 'school'], // index 1
  ['Moose Mountain Community Centre', 45, 'community centre'] //index 2
];

chooseStations(stations);
console.log(chooseStations(stations));