function isValidHSL(hsl) {
  // Step 1: Check format AND capture values
  const match = hsl.match(
    /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*;?$/i,
  );

  // Step 2: If format is wrong, return false
  if (!match) {
    return false;
  }

  // Step 3: Extract and validate the numeric ranges
  const h = parseInt(match[1], 10);
  const s = parseInt(match[2], 10);
  const l = parseInt(match[3], 10);

  // Step 4: Return true only if ALL values are in range
  return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

console.log(isValidHSL("hsl(240, 50%, 50%)"));
console.log(isValidHSL("hsl( 200 , 50% , 75% )"));
console.log(isValidHSL("hsl(99,60%,80%);"));
console.log(isValidHSL("hsl(0, 0%, 0%) ;"));
console.log(isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;"));
console.log(isValidHSL("hsl(361, 50%, 80%)"));
console.log(isValidHSL("hsl(300, 101%, 70%)"));
console.log(isValidHSL("hsl(200, 55%, 75)"));
console.log(isValidHSL("hsl (80, 20%, 10%)"));
