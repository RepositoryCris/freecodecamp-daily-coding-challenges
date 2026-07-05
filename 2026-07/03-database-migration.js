function migrateRecord(schema, record) {
  // Loop through schema keys
  for (let key in schema) {
    // Only add if the key doesn't exist in record
    if (!record.hasOwnProperty(key)) {
      record[key] = schema[key];
    }
  }
  return record;
}

console.log(migrateRecord({ username: "", posts: 0 }, { verified: true })); // should return { username: "", posts: 0, verified: true }.
console.log(
  migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }),
); // should return { username: "camper", posts: 5 }.
console.log(
  migrateRecord(
    { username: "", posts: 0, verified: false },
    { username: "camper" },
  ),
); // should return { username: "camper", posts: 0, verified: false }.
console.log(
  migrateRecord(
    { username: "", posts: 0 },
    { username: "camper", role: "admin" },
  ),
); // should return { username: "camper", role: "admin", posts: 0 }.
console.log(
  migrateRecord(
    {
      username: "",
      email: "",
      posts: 0,
      verified: false,
      role: "user",
      banned: false,
    },
    { username: "camper", email: "camper@freecodecamp.org", role: "admin" },
  ),
); // should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.

/*
Database Migration
Given two database objects, return the second object with any missing properties from the first filled in.

Fields that already exist in the record should not be overwritten.
*/
