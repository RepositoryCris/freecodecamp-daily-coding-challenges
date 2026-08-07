function getSpokenTime(hourAngle, minuteAngle) {
  const hours = hourAngle * (12 / 360);
  console.log("hours", hours);

  const restOfHours =
    hourAngle * (12 / 360) - Math.trunc(hourAngle * (12 / 360));
  console.log("restOfHours", restOfHours);

  const minutes = "m";
  return "";
}

console.log(getSpokenTime(90, 0)); // should return "3 o'clock".
console.log(getSpokenTime(160, 120)); // should return "20 minutes past 5".
console.log(getSpokenTime(255, 180)); // should return "half past 8".
console.log(getSpokenTime(67.5, 92)); // should return "quarter past 2".
console.log(getSpokenTime(200, 240)); // should return "20 minutes to 7".
console.log(getSpokenTime(322.5, 273)); // should return "quarter to 11".
console.log(getSpokenTime(117.5, 335)); // should return "5 minutes to 4".

/*
Spoken Time
Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:

Minutes	Spoken
0	"Y o'clock"
15	"quarter past Y"
1–29 (excluding 15)	"X minutes past Y"
30	"half past Y"
45	"quarter to Z"
31–59 (excluding 45)	"X minutes to Z" (where X is 60 - minutes)
Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.
*/
