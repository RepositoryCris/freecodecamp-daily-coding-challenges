// A date string like "2025-11-14" is parsed as UTC.
// So we always read it back with getUTC* — never getDay().
// Mixing the two causes off-by-one-day bugs in some timezones.

function isWeekend(date = new Date()) {
  const dayOfWeek = date.getUTCDay(); // 0 = Sunday ... 6 = Saturday
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function daysUntilWeekend(dateString) {
  const date = new Date(dateString);

  // Already the weekend? Nothing to count.
  if (isWeekend(date)) {
    return "It's the weekend!";
  }

  // Saturday is day 6, so the number of days until Saturday is (6 - today).
  // Example: Friday is 5 → 6 - 5 = 1 day left.
  const daysLeft = 6 - date.getUTCDay();

  // "1 day" is singular, everything else is plural.
  const dayWord = daysLeft === 1 ? "day" : "days";

  return `${daysLeft} ${dayWord} until the weekend.`;
}


console.log(daysUntilWeekend("2025-11-14"))// should return "1 day until the weekend.".
console.log(daysUntilWeekend("2025-01-01"))// should return "3 days until the weekend.".
console.log(daysUntilWeekend("2025-12-06"))// should return "It's the weekend!".
console.log(daysUntilWeekend("2026-01-27"))// should return "4 days until the weekend.".
console.log(daysUntilWeekend("2026-09-07"))// should return "5 days until the weekend.".
console.log(daysUntilWeekend("2026-11-29"))// should return "It's the weekend!".

/*
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.
*/
