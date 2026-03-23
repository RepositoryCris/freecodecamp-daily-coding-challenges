function getRelativeResults(results) {
  // Helper to convert "H:MM:SS" to total seconds
  const toSeconds = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // The first time is the winner's time
  const winnerSeconds = toSeconds(results[0]);

  return results.map((time, index) => {
    if (index === 0) return "0";

    const currentSeconds = toSeconds(time);
    const diff = currentSeconds - winnerSeconds;

    // Calculate relative minutes and seconds
    const m = Math.floor(diff / 60);
    const s = diff % 60;

    // Format as +M:SS (ensuring seconds are always two digits)
    return `+${m}:${s.toString().padStart(2, "0")}`;
  });
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"])); // should return ["0", "+0:38", "+1:33"].
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"])); // should return ["0", "+0:04", "+0:09"].
console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"])); // should return ["0", "+0:17", "+0:42", "+2:05"].
console.log(
  getRelativeResults([
    "0:49:13",
    "0:49:15",
    "0:50:14",
    "0:51:30",
    "0:51:58",
    "0:52:16",
    "0:53:12",
    "0:53:31",
    "0:56:19",
    "1:02:20",
  ]),
); // should return ["0", "+0:02", "+1:01", "+2:17", "+2:45", "+3:03", "+3:59", "+4:18", "+7:06", "+13:07"].
console.log(
  getRelativeResults([
    "2:01:15",
    "2:10:45",
    "2:10:53",
    "2:11:04",
    "2:11:55",
    "2:13:27",
    "2:14:30",
    "2:15:10",
  ]),
); // should return ["0", "+9:30", "+9:38", "+9:49", "+10:40", "+12:12", "+13:15", "+13:55"].

/*2026 Winter Games Day 5: Cross-Country Skiing
Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

Given times are strings in "H:MM:SS" format.
Given times will be in order from fastest to slowest.
The winners time (fastest time) should correspond to "0".
Each other time should show the time behind the winner, in the format "+M:SS".
For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].*/
