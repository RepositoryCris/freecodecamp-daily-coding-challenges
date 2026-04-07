function getDayOfWeek(timestamp) {
  const date = new Date(timestamp);
  const day = date.getUTCDay(); // ← Use UTC method

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

console.log(getDayOfWeek(1775492249000)); // should return "Monday".
console.log(getDayOfWeek(1766246400000)); // should return "Saturday".
console.log(getDayOfWeek(33791256000000)); // should return "Tuesday".
console.log(getDayOfWeek(1773576000000)); // should return "Sunday".
console.log(getDayOfWeek(0)); // should return "Thursday".
/*

What Day Is It?
Given a Unix timestamp in milliseconds, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.
*/
