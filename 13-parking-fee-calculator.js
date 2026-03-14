function calculateParkingFee(parkTime, pickupTime) {
  let startTimeHours = Number(parkTime.slice(0, 2));
  const startTimeMinutes = Number(parkTime.slice(3, 5));

  let endTimeHours = Number(pickupTime.slice(0, 2));
  const endTimeMinutes = Number(pickupTime.slice(3, 5));

  startTimeHours = startTimeHours + startTimeMinutes / 60;
  endTimeHours = endTimeHours + endTimeMinutes / 60;

  let totalTimeHours = endTimeHours - startTimeHours;

  let totalCost = 0;

  if (endTimeHours < startTimeHours) {
    totalTimeHours = 24 - startTimeHours + endTimeHours;
    totalCost += 10;
  }

  const rounded = Math.ceil(totalTimeHours);

  totalCost = totalCost + rounded * 3;

  if (totalCost < 5) {
    totalCost = 5;
  }

  return `$${totalCost}`;
}

console.log(calculateParkingFee("09:00", "11:00"));
console.log(calculateParkingFee("10:00", "10:30"));
console.log(calculateParkingFee("08:10", "10:45"));
console.log(calculateParkingFee("14:40", "23:10"));
console.log(calculateParkingFee("18:15", "01:30"));
console.log(calculateParkingFee("11:11", "11:10"));

/*Parking Fee Calculator
Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
The first string will be the time you parked your car, and the second will be the time you picked it up.
If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
Fee rules:

Each hour parked costs $3.
Partial hours are rounded up to the next full hour.
If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
There is a minimum fee of $5 (only used if the total would be less than $5).
Return the total cost in the format "$cost", "$5" for example.

*/
