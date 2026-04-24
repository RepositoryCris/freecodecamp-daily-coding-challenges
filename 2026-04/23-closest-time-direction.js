function getDirection(time1, time2) {
  const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const t1 = toMinutes(time1);
  const t2 = toMinutes(time2);

  const forward = (t2 - t1 + 1440) % 1440;
  const backward = (t1 - t2 + 1440) % 1440;

  if (forward < backward) return "forward";
  if (backward < forward) return "backward";
  return "equal";
}

console.log(getDirection("10:00", "12:00")); // should return "forward".
console.log(getDirection("11:00", "05:00")); // should return "backward".
console.log(getDirection("00:00", "12:00")); // should return "equal".
console.log(getDirection("15:45", "01:10")); // should return "forward".
console.log(getDirection("03:30", "19:50")); // should return "backward".
console.log(getDirection("06:30", "18:30")); // should return "equal".

/*
Closest Time Direction
Given two times, determine whether you can get from the first to the second faster by moving forward or backward.

Times are given in 24-hour format ("HH:MM")
The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)
Return:

"forward" if moving forward is shorter
"backward" if moving backward is shorter
"equal" if both directions take the same amount of time
*/
