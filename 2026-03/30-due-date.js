function getDueDate(dateStr) {
  // Destructuring the match array directly into named variables
  const [_, year, month, day] = dateStr
    .match(/(\d{4})-(\d{2})-(\d{2})/)
    .map(Number);

  // JavaScript months are 0-indexed (Jan = 0)
  const currentMonthIndex = month - 1;
  const OFFSET_MONTHS = 9;

  // Calculate destination year and month index
  const targetYear =
    year + Math.floor((currentMonthIndex + OFFSET_MONTHS) / 12);
  const targetMonthIndex = (currentMonthIndex + OFFSET_MONTHS) % 12;

  // Get the last valid day of the target month
  // Day '0' of the next month is the last day of the target month
  const daysInTargetMonth = new Date(
    targetYear,
    targetMonthIndex + 1,
    0,
  ).getDate();

  // "Cap" the day: if the original day (e.g. 31) doesn't exist, use the last day (e.g. 28)
  const finalDay = Math.min(day, daysInTargetMonth);

  // Format with leading zeros
  const formattedMonth = (targetMonthIndex + 1).toString().padStart(2, "0");
  const formattedDay = finalDay.toString().padStart(2, "0");

  return `${targetYear}-${formattedMonth}-${formattedDay}`;
}

console.log(getDueDate("2025-03-30")); // should return "2025-12-30".
console.log(getDueDate("2025-04-27")); // should return "2026-01-27".
console.log(getDueDate("2025-05-29")); // should return "2026-02-28".
console.log(getDueDate("2026-06-30")); // should return "2027-03-30".
console.log(getDueDate("2026-10-11")); // should return "2027-07-11".

/*
Due Date
Given a date string, return the date 9 months in the future.

The given and return strings have the format "YYYY-MM-DD".
If the month nine months into the future doesn't contain the original day number, return the last day of that month.
*/
