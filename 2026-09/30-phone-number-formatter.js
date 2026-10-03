function formatNumber(digits) {
  const country = digits.slice(0, 1);
  const area = digits.slice(1, 4);
  const prefix = digits.slice(4, 7);
  const line = digits.slice(7);
  return `+${country} (${area}) ${prefix}-${line}`;
}

console.log(formatNumber("05552340182")); // should return "+0 (555) 234-0182".
console.log(formatNumber("15554354792")); // should return "+1 (555) 435-4792".

/*
Phone Number Formatter
Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/
