function isMatch(fingerprintA, fingerprintB) {
  // Gate 1: lengths must match
  if (fingerprintA.length !== fingerprintB.length) {
    return false;
  }

  const length = fingerprintA.length;
  const allowedMismatches = length / 10; // 10% of length

  let mismatches = 0;

  // Gate 2: count differing characters
  for (let i = 0; i < length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      mismatches++;
    }
    // Early exit: no point continuing if we already exceed the limit
    if (mismatches > allowedMismatches) {
      return false;
    }
  }

  return mismatches <= allowedMismatches;
}

/*
Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
*/

console.log(isMatch("helloworld", "helloworld")); // should return true.
console.log(isMatch("helloworld", "helloworlds")); // should return false.
console.log(isMatch("helloworld", "jelloworld")); // should return true.
console.log(
  isMatch(
    "thequickbrownfoxjumpsoverthelazydog",
    "thequickbrownfoxjumpsoverthelazydog",
  ),
); // should return true.
console.log(
  isMatch(
    "theslickbrownfoxjumpsoverthelazydog",
    "thequickbrownfoxjumpsoverthehazydog",
  ),
); // should return true.
console.log(
  isMatch(
    "thequickbrownfoxjumpsoverthelazydog",
    "thequickbrownfoxjumpsoverthehazycat",
  ),
); // should return false.
