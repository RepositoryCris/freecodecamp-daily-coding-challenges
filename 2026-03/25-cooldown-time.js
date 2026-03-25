function canRetake(finishTime, currentTime) {
  const t1 = new Date(finishTime);
  const t2 = new Date(currentTime);
  const diffHours = (t2 - t1) / (1000 * 60 * 60);

  if (diffHours >= 48) {
    return true;
  } else {
    return false;
  }
}

console.log(canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00")); // should return true.
console.log(canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00")); // should return false.
console.log(canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00")); // should return true.
console.log(canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59")); // should return false.

/*Cooldown Time
Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
A user must wait at least 48 hours before retaking an exam.*/
