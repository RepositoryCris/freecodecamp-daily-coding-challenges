function milePace(miles, duration) {
  const [mins, secs] = duration.split(":").map(Number);
  const totalMinutes = mins + secs / 60;
  const paceMinutes = totalMinutes / miles;

  const wholeMins = Math.floor(paceMinutes);
  const remainingSecs = Math.round((paceMinutes - wholeMins) * 60);

  if (remainingSecs === 60) {
    return `${String(wholeMins + 1).padStart(2, "0")}:00`;
  }

  return `${String(wholeMins).padStart(2, "0")}:${String(remainingSecs).padStart(2, "0")}`;
}

console.log(milePace(3, "24:00")); // should return "08:00".
console.log(milePace(1, "06:45")); // should return "06:45".
console.log(milePace(2, "07:00")); // should return "03:30".
console.log(milePace(26.2, "120:35")); // should return "04:36".

/*
Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.
*/
