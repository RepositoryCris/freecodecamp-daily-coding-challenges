function findOrg(acronym) {
  const list = [
    "National Avocado Storage Authority",
    "Cats Infiltration Agency",
    "Fluffy Beanbag Inspectors",
    "Department Of Jelly",
    "Wild Honey Organization",
    "Eating Pancakes Administration",
  ];

  // Extract first letters of each word
  const getAcronym = (name) => name.match(/[A-Z]/g).join("");

  // Find matching organization
  const match = list.find((org) => getAcronym(org) === acronym);

  return match || "Acronym not found";
}

console.log(findOrg("NASA")); // should return "National Avocado Storage Authority".
console.log(findOrg("CIA")); // should return "Cats Infiltration Agency".
console.log(findOrg("FBI")); // should return "Fluffy Beanbag Inspectors".
console.log(findOrg("DOJ")); // should return "Department Of Jelly".
console.log(findOrg("WHO")); // should return "Wild Honey Organization".
console.log(findOrg("EPA")); // should return "Eating Pancakes Administration".

/*
Acronym Finder
Given a string representing an acronym, return the full name of the organization it belongs to from the list below:

"National Avocado Storage Authority"
"Cats Infiltration Agency"
"Fluffy Beanbag Inspectors"
"Department Of Jelly"
"Wild Honey Organization"
"Eating Pancakes Administration"
Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

*/
