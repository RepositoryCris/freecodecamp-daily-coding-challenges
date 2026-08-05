function getSpokenDuration(seconds) {
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts = [];

  // Add hours
  if (hours > 0) {
    parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  }

  // Add minutes
  if (minutes > 0) {
    parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  }

  // Add seconds (always add if it's the only unit, or if > 0 with other units)
  if (remainingSeconds > 0 || parts.length === 0) {
    parts.push(
      `${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`,
    );
  }

  // Format the sentence
  if (parts.length === 0) {
    return "0 seconds"; // or handle as needed
  }

  if (parts.length === 1) {
    return parts[0];
  }

  if (parts.length === 2) {
    return parts.join(" and ");
  }

  // 3 parts: join first two with comma, last with "and"
  return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
}

console.log(getSpokenDuration(3723)); // should return "1 hour, 2 minutes and 3 seconds".
console.log(getSpokenDuration(7295)); // should return "2 hours, 1 minute and 35 seconds".
console.log(getSpokenDuration(8521)); // should return "2 hours, 22 minutes and 1 second".
console.log(getSpokenDuration(435)); // should return "7 minutes and 15 seconds".
console.log(getSpokenDuration(14455)); // should return "4 hours and 55 seconds".
console.log(getSpokenDuration(72000)); // should return "20 hours".
console.log(getSpokenDuration(1)); // should return "1 second".

/*
Spoken Duration
Given a number of seconds, return the duration in spoken English.

Break the duration into hours, minutes, and seconds.
Skip any zero values.
Use singular or plural as appropriate ("1 hour", "2 hours").
If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

*/
