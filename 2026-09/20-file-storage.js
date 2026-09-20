// Lookup table: bytes per unit (defined once, outside the function)
const byteMap = new Map([
  ["B", 1],
  ["KB", 1000],
  ["MB", 1000000],
  ["GB", 1000000000],
]);

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  // 1. Convert the drive capacity to bytes
  const driveInBytes = driveSizeGb * byteMap.get("GB");

  // 2. Convert the file size to bytes
  const fileInBytes = fileSize * byteMap.get(fileUnit);

  // 3. Divide and round down to whole files
  const result = Math.floor(driveInBytes / fileInBytes);

  return result;
}

console.log(numberOfFiles(500, "KB", 1)); // should return 2000.
console.log(numberOfFiles(50000, "B", 1)); // should return 20000.
console.log(numberOfFiles(5, "MB", 1)); // should return 200.
console.log(numberOfFiles(4096, "B", 1.5)); // should return 366210.
console.log(numberOfFiles(220.5, "KB", 100)); // should return 453514.
console.log(numberOfFiles(4.5, "MB", 750)); // should return 166666.

/*
File Storage
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.
*/
