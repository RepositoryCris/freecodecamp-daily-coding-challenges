function generateSlug(str) {
  return str
    .toLowerCase() // 1. lowercase everything
    .replace(/[^a-z0-9 ]/g, "") // 2. strip non-letters/numbers/spaces
    .trim() // 3. remove leading/trailing spaces
    .replace(/ +/g, "%20"); // 4. collapse spaces & encode in one pass
}

console.log(generateSlug("helloWorld")); // should return "helloworld".
console.log(generateSlug("hello world!")); // should return "hello%20world".
console.log(generateSlug(" hello-world ")); // should return "helloworld".
console.log(generateSlug("hello  world")); // should return "hello%20world".
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")); // should return "h3110%20w0r1d".

/*
Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.
*/
