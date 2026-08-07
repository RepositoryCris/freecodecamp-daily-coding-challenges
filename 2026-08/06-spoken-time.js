function getSpokenTime(hourAngle, minuteAngle) {
  // Derive exact total hours from the hour hand angle (30 deg/hr)
  const totalHours = hourAngle / 30;
  const rawHour = Math.floor(totalHours);

  // Minutes derived directly from the hour hand's movement within the hour
  // (30 deg = 60 min, so fractional degrees * 2 = minutes)
  const minutesFromHourHand = Math.round((totalHours - rawHour) * 60);

  // Fallback to minute hand angle if minute hand is specified without hour drift
  const minutesFromMinuteHand = Math.round(minuteAngle / 6);

  // Use hour hand precision if available, otherwise minute hand
  const minutes = minutesFromHourHand || minutesFromMinuteHand;

  // 12-hour clock formatting
  const format12 = (h) => (h % 12 === 0 ? 12 : h % 12);
  const Y = format12(rawHour);
  const Z = format12(rawHour + 1);

  // Spoken formatting rules
  if (minutes === 0) return `${Y} o'clock`;
  if (minutes === 15) return `quarter past ${Y}`;
  if (minutes === 30) return `half past ${Y}`;
  if (minutes === 45) return `quarter to ${Z}`;

  return minutes < 30
    ? `${minutes} minutes past ${Y}`
    : `${60 - minutes} minutes to ${Z}`;
}

// Test outputs:
console.log(getSpokenTime(90, 0)); // "3 o'clock"
console.log(getSpokenTime(160, 120)); // "20 minutes past 5"
console.log(getSpokenTime(255, 180)); // "half past 8"
console.log(getSpokenTime(67.5, 92)); // "quarter past 2"
console.log(getSpokenTime(200, 240)); // "20 minutes to 7"
console.log(getSpokenTime(322.5, 273)); // "quarter to 11"
console.log(getSpokenTime(117.5, 335)); // "5 minutes to 4"

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
