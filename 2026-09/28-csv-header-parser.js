function getHeadings(csv) {
  const headerParser = csv.split(",");
  return headerParser.map((word) => word.trim());
}

console.log(getHeadings("name,age,city")); // ["name", "age", "city"]
console.log(getHeadings("first name,last name,phone")); // ["first name", "last name", "phone"]
console.log(getHeadings("username , email , signup date ")); // ["username", "email", "signup date"]

/*
CSV Header Parser
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.
*/
