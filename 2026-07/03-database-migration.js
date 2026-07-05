function migrateRecord(schema, record) {
  schema.forEach((value, index) => {
    if (schema[index] === record[index]) {
      console.log("found");
    }
  });
  return schema;
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
