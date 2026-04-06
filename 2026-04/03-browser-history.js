function getBrowserHistory(commands) {
  const history = [];
  let index = -1;

  for (const cmd of commands) {
    if (cmd === "Back") {
      if (index > 0) index--;
    } else if (cmd === "Forward") {
      if (index < history.length - 1) index++;
    } else {
      // Navigate to URL: discard forward history, add new page
      history.splice(index + 1); //Removes elements from an array starting at a specified index
      history.push(cmd);
      index++;
    }
  }

  return [history, index];
}

console.log(
  getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]),
); // should return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "example.com/contact",
    "example.com/blog",
  ]),
); // should return [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "Back",
    "example.com/contact",
    "example.com/blog",
    "Back",
    "Back",
    "Forward",
  ]),
); // should return [["example.com", "example.com/contact", "example.com/blog"], 1].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "example.com/contact",
    "example.com/blog",
    "Back",
    "Back",
    "Forward",
    "freecodecamp.org",
  ]),
); // should return [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].
console.log(
  getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]),
); // should return [["example.com", "example.com/about"], 0].
console.log(getBrowserHistory(["example.com", "example.com/about", "Forward"])); // should return [["example.com", "example.com/about"], 1].

/*
Browser History
Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.

Valid commands are:

"URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
"Back" - moves to the previous page in history, or stays on the current page if there isn't one.
"Forward" - moves to the next page in history, or stays on the current page if there isn't one.
For example, given ["freecodecamp.org", "freecodecamp.org/learn", "Back"], return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
*/
