function getRotation(n) {
  let numStr = String(n);
  const digitCount = numStr.length;

  for (let rotation = 0; rotation < digitCount; rotation++) {
    // Check current rotation
    const currentNum = Number(numStr);
    if (currentNum % digitCount === 0) {
      return rotation;
    }

    // Rotate: move first digit to end
    numStr = numStr.slice(1) + numStr[0];
  }

  return "none";
}
console.log(getRotation(123)); // should return 0.
console.log(getRotation(13579)); // should return 3.
console.log(getRotation(24681)); // should return "none".
console.log(getRotation(84138789345)); // should return 6.

/*
Digit Rotation Escape
Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

Check rotation 0 (the given number) first.
Given numbers won't contain any zeros.
Return the first rotation number if one is found, or "none" if not.
*/
