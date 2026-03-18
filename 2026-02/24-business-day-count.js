function countBusinessDays(start, end) {
  // 1. Convert strings to Date objects
  let current = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");

  let count = 0;

  // 2. Iterate through the range inclusive
  while (current <= endDate) {
    const dayOfWeek = current.getDay();

    // 0 is Sunday, 6 is Saturday. We want 1-5.
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    if (!isWeekend) {
      count++;
    }

    // 3. Increment the date by 1 day
    current.setDate(current.getDate() + 1);
  }

  return count;
}

console.log(countBusinessDays("2026-02-24", "2026-02-26")); //should return 3.
console.log(countBusinessDays("2026-02-24", "2026-02-28")); // should return 4.
console.log(countBusinessDays("2026-02-21", "2026-03-01")); // should return 5.
console.log(countBusinessDays("2026-03-08", "2026-03-17")); // should return 7.
console.log(countBusinessDays("2026-02-24", "2027-02-24")); // should return 262.

/*Business Day Count
Given a start date and an end date, return the number of business days between the two.

Given dates are in the format "YYYY-MM-DD".
Weekdays are business days (Monday through Friday).
Weekends are not business days (Saturday and Sunday).
Include both the start and end dates when counting.*/
