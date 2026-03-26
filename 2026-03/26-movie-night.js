function getMovieNightCost(day, showtime, numberOfTickets) {
  const hours = showtime.match(/(\d{1,2})/);
  const minutes = showtime.match(/(\d{2})(?=am|pm)/i);
  const amPm = showtime.match(/am|pm/i);
  let h = Number(hours[0]);
  let m = Number(minutes[0]);

  if (amPm[0] === "pm") {
    h += 12;
  }

  const totalHours = h + m / 60;
  let cost = 0;

  if (day === "Tuesday") {
    cost = 5 * numberOfTickets;
    return `$${cost.toFixed(2)}`;
  }

  if (day === "Friday" || day === "Saturday" || day === "Sunday") {
    cost = 12 * numberOfTickets;
  }

  if (day === "Monday" || day === "Wednesday" || day === "Thursday") {
    cost = 10 * numberOfTickets;
  }

  if (totalHours < 17) {
    cost = cost - 2 * numberOfTickets;
  }

  return `$${cost.toFixed(2)}`;
}

console.log(getMovieNightCost("Saturday", "10:00pm", 1)); // should return "$12.00".
console.log(getMovieNightCost("Sunday", "10:00am", 1)); // should return "$10.00".
console.log(getMovieNightCost("Tuesday", "7:20pm", 2)); // should return "$10.00".
console.log(getMovieNightCost("Wednesday", "5:40pm", 3)); // should return "$30.00".
console.log(getMovieNightCost("Monday", "11:50am", 4)); // should return "$32.00".
console.log(getMovieNightCost("Friday", "4:30pm", 5)); // should return "$50.00".
console.log(getMovieNightCost("Tuesday", "11:30am", 1)); // should return "$5.00".

/*Movie Night
Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
"Sunday"
The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:

Weekend (Friday - Sunday): $12.00 per ticket.
Weekday (Monday - Thursday): $10.00 per ticket.
Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
Tuesdays: all tickets are $5.00 each.*/
