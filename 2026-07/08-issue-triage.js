function triageIssue(ms, message) {
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000; // 604,800,000 ms

  // Rule 1: Less than 7 days old → leave it
  if (ms < SEVEN_DAYS) {
    return "leave it";
  }

  // Rule 2: 7+ days old AND contains "bump" → close it
  if (message.toLowerCase().includes("bump")) {
    return "close it";
  }

  // Rule 3: Everything else → bump it
  return "bump it";
}

// All your test cases
console.log("Test Results:");
console.log("1.", triageIssue(86400000, "Lets fix it")); // "leave it"
console.log("2.", triageIssue(1209600000, "still waiting")); // "bump it"
console.log("3.", triageIssue(864000000, "bump")); // "close it"
console.log("4.", triageIssue(604800000, "Do we still want this?")); // "bump it"
console.log("5.", triageIssue(604800000, "Bumping this")); // "close it"
console.log("6.", triageIssue(345600000, "I'll make a PR")); // "leave it"

/*
Issue Triage
Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:

If the last message is less than 7 days ago, return "leave it"
If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
Otherwise, return "bump it"
*/
