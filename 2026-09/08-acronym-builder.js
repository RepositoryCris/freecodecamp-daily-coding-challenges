function buildAcronym(str) {
  const words = str.split(" ");
  const acronym = [];

  const ignored = ["a", "for", "an", "and", "by", "of"];

  for (let word of words) {
    if (!ignored.includes(word)) {
      const character = word[0].toUpperCase();
      acronym.push(character);
    }
  }
  return acronym.join("");
}

console.log(buildAcronym("Search Engine Optimization")); // should return "SEO".
console.log(buildAcronym("Frequently Asked Questions")); // should return "FAQ".
console.log(buildAcronym("National Aeronautics and Space Administration")); // should return "NASA".
console.log(buildAcronym("Federal Bureau of Investigation")); // should return "FBI".
console.log(buildAcronym("For your information")); // should return "FYI".
console.log(buildAcronym("By the way")); // should return "BTW".
console.log(
  buildAcronym(
    "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily",
  ),
); // should return "AUHWPOTIMSH".

/*
Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.
*/
