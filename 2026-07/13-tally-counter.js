function getTallyCount(str) {
  const groups = str.split(" ");
  //console.log(groups)

  let total = 0;

  for (let group of groups) {
    if (group === "") continue; // Skip empty groups

    let count = 0;

    if (group.includes("/")) {
      // A group with "/" always represents 5 marks
      count = 5;
    } else {
      // Count only pipes in groups without "/"
      for (let char of group) {
        if (char === "|") {
          count++;
        }
      }
    }

    total += count;
  }

  return total;
}

console.log(getTallyCount("||||")); // should return 4.
console.log(getTallyCount("||||/")); // should return 5.
console.log(getTallyCount("||||/ |||")); // should return 8.
console.log(getTallyCount("||||/ ||||/ ||||/ ||")); // should return 17.
console.log(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |")); // should return 41.

/*
Tally Counter
Given a string of tally marks, return the total count represented.

Each pipe "|" represents one count.
Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
Groups are separated by a space.
*/
