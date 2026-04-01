function alarmCheck(alarmTime, wakeTime) {
  const alarm = alarmTime.match(/(\d{2}):(\d{2})/);
  const wake = wakeTime.match(/(\d{2}):(\d{2})/);

  const alarmMinutes = Number(alarm[1]) * 60 + Number(alarm[2]);
  const wakeMinutes = Number(wake[1]) * 60 + Number(wake[2]);

  if (wakeMinutes < alarmMinutes) {
    return "early";
  } else if (alarmMinutes === wakeMinutes) {
    return "on time";
  } else {
    const snoozeWindow = wakeMinutes - alarmMinutes;

    if (snoozeWindow <= 10) {
      return "on time";
    } else {
      return "late";
    }
  }
}

console.log(alarmCheck("07:00", "06:45")); // should return "early".
console.log(alarmCheck("06:30", "06:30")); // should return "on time".
console.log(alarmCheck("08:10", "08:15")); // should return "on time".
console.log(alarmCheck("09:30", "09:45")); // should return "late".
console.log(alarmCheck("08:15", "08:25")); // should return "on time".
console.log(alarmCheck("05:45", "05:56")); // should return "late".
console.log(alarmCheck("04:30", "04:00")); // should return "early".

/*
Wake-Up Alarm
Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.
Return:

"early" if you woke up before your alarm time.
"on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
"late" if you woke up more than 10 minutes after your alarm time.
Both times are on the same day.
*/
