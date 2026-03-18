function canDonate(donor, recipient) {
  let donorType = donor.slice(0, -1);
  let donorSign = donor.slice(-1);

  let recipientType = recipient.slice(0, -1);
  let recipientSign = recipient.slice(-1);

  // 1. Check Rh Factor (Sign)
  // Rule: Positive can only give to Positive. Negative can give to anyone.
  const signMatch =
    donorSign === "-" || (donorSign === "+" && recipientSign === "+");

  // 2. Check Blood Group (Letters)
  let typeMatch = false;
  if (donorType === "O") {
    typeMatch = true;
  } else if (donorType === "A") {
    typeMatch = recipientType === "A" || recipientType === "AB";
  } else if (donorType === "B") {
    typeMatch = recipientType === "B" || recipientType === "AB";
  } else if (donorType === "AB") {
    typeMatch = recipientType === "AB";
  }

  // Both must be true
  return signMatch && typeMatch;
}

console.log(canDonate("B+", "B+")); //should return true.
console.log(canDonate("O-", "AB-")); //should return true.
console.log(canDonate("O+", "A-")); //should return false.
console.log(canDonate("A+", "AB+")); //should return true.
console.log(canDonate("A-", "B-")); //should return false.
console.log(canDonate("B-", "AB+")); //should return true.
console.log(canDonate("B-", "A+")); //should return false.
console.log(canDonate("O-", "O+")); //should return true.
console.log(canDonate("O+", "O-")); //should return false.
console.log(canDonate("AB+", "AB-")); //should return false.

/*Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.*/
