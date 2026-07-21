function elevatorStops(currentFloor, stops) {
  const copy = [...stops];
  let current = currentFloor;
  let distance = 0;
  let distance_array = [];

  for (let i = 0; i < stops.length; i++) {
    distance = Math.abs(currentFloor - stops[i]);
    distance_array.push(distance);
    console.log(distance_array);
  }
  console.log(Math.min(distance_array));

  return currentFloor;
}

console.log(elevatorStops(5, [2, 8, 3, 9])); // should return [3, 2, 8, 9].
console.log(elevatorStops(6, [2, 10, 8, 3, 1, 9])); // should return [8, 9, 10, 3, 2, 1].
console.log(elevatorStops(1, [4, 8, 3, 6, 9])); // should return [3, 4, 6, 8, 9].
console.log(elevatorStops(12, [6, 10, 7, 3, 1, 4])); // should return [10, 7, 6, 4, 3, 1].
console.log(elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19])); // should return [10, 9, 8, 6, 5, 2, 12, 19, 23].

/*
Elevator Stops
Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.

If tied, go up first
Floors with a request must be visited when the elevator first passes them
*/
