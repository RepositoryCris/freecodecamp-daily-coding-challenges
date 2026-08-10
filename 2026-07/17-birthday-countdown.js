function daysUntilBirthday(today, birthday) {
  const [year, month, day] = today.split("-").map(Number);
  const [bMonth, bDay] = birthday.split("/").map(Number);

  const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  const todayDate = new Date(year, month - 1, day);

  let y = year;
  while (true) {
    // Skip Feb 29 in non-leap years
    if (bMonth === 2 && bDay === 29 && !isLeap(y)) {
      y++;
      continue;
    }

    const target = new Date(y, bMonth - 1, bDay);
    if (target > todayDate) {
      const diff = target - todayDate;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    y++;
  }
}

// Test cases
console.log(daysUntilBirthday("2026-07-16", "9/7")); // should return 53
console.log(daysUntilBirthday("2026-07-16", "3/22")); // should return 249
console.log(daysUntilBirthday("2026-07-16", "7/16")); // should return 365
console.log(daysUntilBirthday("2024-02-28", "3/1")); // should return 2
console.log(daysUntilBirthday("2023-04-24", "12/30")); // should return 250
console.log(daysUntilBirthday("2024-03-01", "2/29")); // should return 1460
console.log(daysUntilBirthday("2096-03-01", "2/29")); // should return 2920

/*
Birthday Countdown
Given today's date and a birthday, return the number of days until the person's next birthday.

Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
If today is their birthday, return the number of days until their next birthday (not 0).
Leap years should be accounted for.
*/
