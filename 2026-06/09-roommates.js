function getRoommates(people) {
  // Get unique groups first
  //console.log(people)
  const allGroups = people.map((item) => item.group);
  //console.log(allGroups)

  const uniqueGroups = [...new Set(allGroups)];
  //console.log(uniqueGroups)

  let sharedRooms = [];
  // For each group, filter people in that group
  const result = uniqueGroups.map((group) => {
    const names = people;
    const filterNames = names
      .filter((person) => person.group === group)
      .map((person) => {
        return person.name;
      });
    //console.log("filterNames", filterNames)
    //console.log("filterNames", filterNames.length)

    for (let i = 0; i < filterNames.length; i += 2) {
      if (filterNames[i] && filterNames[i + 1]) {
        //console.log(`${filterNames[i]} and ${filterNames[i+1]}`)
        sharedRooms.push(`${filterNames[i]} and ${filterNames[i + 1]}`);
      } else {
        //console.log(`${filterNames[i]}`)
        sharedRooms.push(`${filterNames[i]}`);
      }
    }
    //console.log("sharedRooms", sharedRooms)
  });
  return sharedRooms;
}

console.log(
  getRoommates([
    { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Carol", group: "A" },
  ]),
); // should return ["Alice and Carol", "Bob"].
console.log(
  getRoommates([
    { name: "John", group: "C" },
    { name: "Julia", group: "C" },
    { name: "Jim", group: "C" },
  ]),
); // should return ["John and Julia", "Jim"].
console.log(
  getRoommates([
    { name: "Adam", group: "D" },
    { name: "Abraham", group: "E" },
    { name: "Austin", group: "E" },
    { name: "Augustus", group: "D" },
    { name: "Angelica", group: "D" },
    { name: "Aaron", group: "E" },
  ]),
); // should return ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"].
console.log(
  getRoommates([
    { name: "Frank", group: "A" },
    { name: "Emitt", group: "B" },
    { name: "Daria", group: "F" },
    { name: "Charles", group: "D" },
    { name: "Bailey", group: "A" },
    { name: "Albert", group: "F" },
  ]),
); // should return ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"].
console.log(
  getRoommates([
    { name: "Kevin", group: "A" },
    { name: "Yuri", group: "A" },
    { name: "Hugo", group: "B" },
    { name: "Violet", group: "A" },
    { name: "Brett", group: "A" },
    { name: "Wayne", group: "B" },
  ]),
); // should return ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"].

/*
Roommates
Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:

Each person has a name and a group property:
[
  { "name": "Alice", "group": "A" },
  { "name": "Bob", "group": "B" },
  { "name": "Carol", "group": "A" }
]
People can only share a room with someone from the same group and are paired in the order they are given.
Return an array of strings with names separated by " and " for a shared room, and just the name for a solo room. Names must appear in the order they were paired. For the example above, return ["Alice and Carol", "Bob"].
*/
