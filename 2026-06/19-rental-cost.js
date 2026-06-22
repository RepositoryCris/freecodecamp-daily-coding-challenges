function getRentalCost(rented, returned, tier) {
  // Step 1: Parse the date strings into Date objects
  const rentedDate = new Date(rented);
  const returnedDate = new Date(returned);

  // Step 2: Define pricing based on tier
  const pricing = {
    1: { baseCost: 4.99, lateFeePerDay: 3.99 },
    3: { baseCost: 3.99, lateFeePerDay: 2.99 },
    7: { baseCost: 2.99, lateFeePerDay: 0.99 },
  };

  // Step 3: Calculate the due date
  // Due date = rental date + tier days, but at 12:00 PM UTC
  const dueDate = new Date(rentedDate);
  dueDate.setUTCHours(12, 0, 0, 0); // Set to 12:00:00.000 UTC
  dueDate.setUTCDate(dueDate.getUTCDate() + tier); // Add tier days

  // Step 4: Calculate if there are any late days
  let lateDays = 0;

  // Check if returned after the due date
  if (returnedDate > dueDate) {
    // Calculate the time difference in milliseconds
    const timeDiffMilliseconds = returnedDate - dueDate;

    // Convert to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const timeDiffDays = timeDiffMilliseconds / (24 * 60 * 60 * 1000);

    // Round up to the nearest whole day (ceil)
    // This means even 1 minute late counts as a full day
    lateDays = Math.ceil(timeDiffDays);
  }

  // Step 5: Calculate total cost
  const { baseCost, lateFeePerDay } = pricing[tier];
  const totalCost = baseCost + lateDays * lateFeePerDay;

  // Step 6: Return formatted result
  return `$${totalCost.toFixed(2)}`;
}

// Test cases
console.log(getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1)); // "$4.99"
console.log(getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1)); // "$12.97"
console.log(getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3)); // "$3.99"
console.log(getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3)); // "$9.97"
console.log(getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7)); // "$2.99"
console.log(getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7)); // "$358.40"

/*
Rental Cost
Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
The rental tier is the number of days before the rental is due back: 1, 3, or 7.
Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
Each day past the due date and time incurs a late fee.
Pricing is as follows:

Tier	Base cost	Late fee per day
1 day	$4.99	$3.99
3 days	$3.99	$2.99
7 days	$2.99	$0.99
Return the total cost rounded to two decimal places in the format "$D.CC".
*/
