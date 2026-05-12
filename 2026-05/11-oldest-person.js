function getOldest(people) {
  if (people.length === 0) return [];

  // 1. Find the maximum age
  // We use map to get an array of ages, then spread (...) into Math.max
  const maxAge = Math.max(...people.map((person) => person.age));

  // 2. Filter the people who match the maxAge and map to their names
  return people
    .filter((person) => person.age === maxAge)
    .map((person) => person.name);
}

// --- Test Cases ---
console.log(getOldest([{ name: "Brenda", age: 40 }]));
// ["Brenda"]

console.log(
  getOldest([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ]),
);
// ["Alice"]

console.log(
  getOldest([
    { name: "Allison", age: 25 },
    { name: "Bill", age: 30 },
    { name: "Carol", age: 30 },
  ]),
);
// ["Bill", "Carol"]

console.log(
  getOldest([
    { name: "George", age: 50 },
    { name: "Shirley", age: 42 },
    { name: "Beth", age: 48 },
    { name: "Holly", age: 50 },
    { name: "Kevin", age: 44 },
    { name: "Frank", age: 47 },
    { name: "Zach", age: 50 },
    { name: "Jennifer", age: 43 },
  ]),
);
// ["George", "Holly", "Zach"]

/*
Oldest Person
Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.
*/
