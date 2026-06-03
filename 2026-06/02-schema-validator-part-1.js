function isValidSchema(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "username") {
      return typeof obj.username === "string";
    }
  }
  return false; // username not found
}

console.log(isValidSchema({ username: "bob" })); // should return true.
console.log(isValidSchema({ username: "jen", posts: 30 })); // should return true.
console.log(isValidSchema({ username: "" })); // should return true.
console.log(isValidSchema({ username: 7 })); // should return false.
console.log(isValidSchema({ posts: 25 })); // should return false.

/*
Schema Validator Part 1
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}
Extra keys are allowed
*/
