function parseFrontmatter(str) {
  const slice = str.slice(3, -3).trim(); // Fixed: slice(3, -3) not slice(4, -4)
  //console.log(slice);

  const arrayOfKeysAndValues = slice.split("\n");
  //console.log(arrayOfKeysAndValues);

  let newObject = {};

  // Fixed: loop through arrayOfKeysAndValues, not str
  for (let i = 0; i < arrayOfKeysAndValues.length; i++) {
    // Skip empty lines
    if (arrayOfKeysAndValues[i].trim() === "") continue;

    const newKeyValue = arrayOfKeysAndValues[i].split(":");
    //console.log(newKeyValue);

    const key = newKeyValue[0].trim();
    let value = newKeyValue.slice(1).join(":").trim(); // Handle values with colons

    // Convert value to proper type
    if (value === "true") {
      newObject[key] = true;
    } else if (value === "false") {
      newObject[key] = false;
    } else if (!isNaN(value) && value !== "") {
      newObject[key] = Number(value);
    } else {
      newObject[key] = value;
    }
  }

  return newObject;
}

console.log(
  parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---"),
); // should return { title: "My Post", draft: false, views: 100 }.
console.log(
  parseFrontmatter(
    "---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---",
  ),
); // should return { id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false }.
console.log(
  parseFrontmatter(
    "---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---",
  ),
); // should return { version: "1.0.0", url: "https://example.com", private: true }.
console.log(parseFrontmatter("---\nrating: 4.5\nprice: 9.99\n---")); // should return { rating: 4.5, price: 9.99 }.

/*
Frontmatter Parser
Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.

Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:

---
title: My Post
draft: false
views: 100
---
Should return:

{
  title: "My Post",
  draft: false,
  views: 100
}
Numbers, Booleans, and Strings should all be returned as their respective type.
The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".
*/
