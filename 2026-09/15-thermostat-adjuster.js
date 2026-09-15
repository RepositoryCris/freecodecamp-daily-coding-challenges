function adjustThermostat(temp, target) {
  if (temp < target) {
    return "heat";
  } else if (temp > target) {
    return "cool";
  } else {
    return "hold";
  }
}

console.log(adjustThermostat(68, 72)); // should return "heat".
console.log(adjustThermostat(75, 72)); // should return "cool".
console.log(adjustThermostat(72, 72)); // should return "hold".
console.log(adjustThermostat(-20.5, -10.1)); // should return "heat".
console.log(adjustThermostat(100, 99.9)); // should return "cool".
console.log(adjustThermostat(0.0, 0.0)); // should return "hold"

/*
Thermostat Adjuster
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

Return "heat" if the current temperature is below the target.
Return "cool" if the current temperature is above the target.
Return "hold" if the current temperature is equal to the target.
*/
