function isValidIPv4(ipv4) {
  const address = ipv4.split(".");

  // Must have exactly 4 parts
  if (address.length !== 4) {
    return false;
  }

  for (let part of address) {
    // Check if part is empty or has leading zeros (except "0" itself)
    if (part === "" || (part.length > 1 && part[0] === "0")) {
      return false;
    }

    // Check if part contains only digits
    if (!/^\d+$/.test(part)) {
      return false;
    }

    // Convert to number and check range
    const number = Number(part);
    if (number < 0 || number > 255) {
      return false;
    }
  }

  return true;
}

console.log(isValidIPv4("192.168.1.1")); // should return true.
console.log(isValidIPv4("0.0.0.0")); // should return true.
console.log(isValidIPv4("255.01.50.111")); // should return false.
console.log(isValidIPv4("255.00.50.111")); // should return false.
console.log(isValidIPv4("256.101.50.115")); // should return false.
console.log(isValidIPv4("192.168.101.")); // should return false.
console.log(isValidIPv4("192168145213")); // should return false.

/*
IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
*/
