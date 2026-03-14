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
