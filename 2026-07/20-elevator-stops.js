function elevatorStops(currentFloor, stops) {
  const up = stops
    .filter((floor) => floor > currentFloor)
    .sort((a, b) => a - b);
  const down = stops
    .filter((floor) => floor < currentFloor)
    .sort((a, b) => b - a);

  if (up.length === 0) return down;
  if (down.length === 0) return up;

  // Calculate total travel distance for starting UP vs starting DOWN
  const highest = up[up.length - 1];
  const lowest = down[down.length - 1];

  // UP first: go up to highest, then down to lowest
  const distIfUpFirst = highest - currentFloor + (highest - lowest);

  // DOWN first: go down to lowest, then up to highest
  const distIfDownFirst = currentFloor - lowest + (highest - lowest);

  // Compare total distance. If tied (distIfUpFirst === distIfDownFirst), go UP first (<=" handles tie)
  if (distIfUpFirst <= distIfDownFirst) {
    return [...up, ...down];
  } else {
    return [...down, ...up];
  }
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
