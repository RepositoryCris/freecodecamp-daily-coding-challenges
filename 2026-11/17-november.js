function isMatch(fingerprintA, fingerprintB) {
  const allowedPercentage = fingerprintA.length / 10 + fingerprintA.length;

  console.log(fingerprintB.length);
  console.log(allowedPercentage);

  if (fingerprintB.length <= allowedPercentage) {
    return true;
  } else {
    return false;
  }
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
