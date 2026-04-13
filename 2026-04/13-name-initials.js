function getInitials(name) {
  const divided = name.split(" ");
  let initial = "";
  let initials = "";

  function convert(string) {
    const converted = string.match(/^[A-Z]/)[0];
    return converted;
  }

  for (let part of divided) {
    initial = convert(part);
    initials += initial + ".";
  }

  return initials;
}

/*
Name Initials
Given a full name as a string, return their initials.

Names to initialize are separated by a space.
Initials should be made uppercase.
Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".
*/

console.log(getInitials("Tommy Millwood")); // should return "T.M.".
console.log(getInitials("Savanna Puddlesplash")); // should return "S.P.".
console.log(getInitials("Frances Cowell Conrad")); // should return "F.C.C.".
console.log(getInitials("Dragon")); // should return "D.".
console.log(getInitials("Dorothy Vera Clump Haverstock Norris")); // should return "D.V.C.H.N.".
