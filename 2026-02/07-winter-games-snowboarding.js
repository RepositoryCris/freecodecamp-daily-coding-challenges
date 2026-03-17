function getLandingStance(startStance, rotation) {
  // Calculate number of flips (0 or 1 after modulo 2)
  const flips = Math.floor(Math.abs(rotation) / 180) % 2;

  // Check if we need to flip
  if (flips === 0) {
    return startStance;
  } else {
    // Return opposite stance
    return startStance === "Regular" ? "Goofy" : "Regular";
  }
}
//The code is just counting how many times they spin halfway around, then checking if that number is odd or even!

console.log(getLandingStance("Regular", 90)); //should return "Regular".
console.log(getLandingStance("Regular", 180)); //should return "Goofy".
console.log(getLandingStance("Goofy", -270)); //should return "Regular".
console.log(getLandingStance("Regular", 2340)); //should return "Goofy".
console.log(getLandingStance("Goofy", 2160)); //should return "Goofy".
console.log(getLandingStance("Goofy", -540)); //should return "Regular".

/*2026 Winter Games Day 2: Snowboarding
Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

A snowboarder's stance is either "Regular" or "Goofy".
Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
The landing stance flips every 180 degrees of rotation.
For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".*/
