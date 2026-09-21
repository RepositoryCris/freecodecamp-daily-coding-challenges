// Lookup table: bytes per unit (defined once, outside the function)
const BYTES_PER_UNIT = new Map([
  ["B", 1],
  ["KB", 1000],
  ["MB", 1000000],
  ["GB", 1000000000],
  ["TB", 1000000000000],
]);

// Valid units for each argument, based on the problem constraints
const VALID_VIDEO_UNITS = new Set(["B", "KB", "MB", "GB"]);
const VALID_DRIVE_UNITS = new Set(["GB", "TB"]);

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  // Reject any video unit that isn't B, KB, MB, or GB
  if (!VALID_VIDEO_UNITS.has(videoUnit)) {
    return "Invalid video unit";
  }

  // Reject any drive unit that isn't GB or TB
  if (!VALID_DRIVE_UNITS.has(driveUnit)) {
    return "Invalid drive unit";
  }

  // 1. Convert the drive capacity to bytes
  const driveInBytes = driveSize * BYTES_PER_UNIT.get(driveUnit);

  // 2. Convert the video size to bytes
  const videoInBytes = videoSize * BYTES_PER_UNIT.get(videoUnit);

  // 3. Divide and round down to get only whole videos
  return Math.floor(driveInBytes / videoInBytes);
}

// --- Test cases ---
console.log(numberOfVideos(500, "MB", 100, "GB")); // 200
console.log(numberOfVideos(1, "TB", 10, "TB")); // "Invalid video unit"
console.log(numberOfVideos(2000, "MB", 100000, "MB")); // "Invalid drive unit"
console.log(numberOfVideos(500000, "KB", 2, "TB")); // 4000
console.log(numberOfVideos(1.5, "GB", 2.2, "TB")); // 1466

console.log(numberOfVideos(500, "MB", 100, "GB")); // should return 200.
console.log(numberOfVideos(1, "TB", 10, "TB")); // should return "Invalid video unit".
console.log(numberOfVideos(2000, "MB", 100000, "MB")); // should return "Invalid drive unit".
console.log(numberOfVideos(500000, "KB", 2, "TB")); // should return 4000.
console.log(numberOfVideos(1.5, "GB", 2.2, "TB")); // should return 1466.

/*
Video Storage
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB
For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
*/
