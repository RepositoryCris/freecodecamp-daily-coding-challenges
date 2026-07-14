function horoscopeMatch(sign1, sign2) {
  const distanceCompatibility = {
    0: "100%",
    1: "40%",
    2: "80%",
    3: "30%",
    4: "90%",
    5: "20%",
    6: "50%",
  };

  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const firstIndex = signs.indexOf(sign1);
  const secondIndex = signs.indexOf(sign2);

  let distance = Math.abs(firstIndex - secondIndex);

  if (distance > 6) {
    distance = 12 - distance;
    //console.log("recalculating",distance)
  }

  //console.log(distance)

  return distanceCompatibility[distance];
}

console.log(horoscopeMatch("Libra", "Sagittarius")); // should return "80%".
console.log(horoscopeMatch("Gemini", "Scorpio")); // should return "20%".
console.log(horoscopeMatch("Pisces", "Aries")); // should return "40%".
console.log(horoscopeMatch("Capricorn", "Cancer")); // should return "50%".
console.log(horoscopeMatch("Aquarius", "Aquarius")); // should return "100%".
console.log(horoscopeMatch("Virgo", "Taurus")); // should return "90%".
console.log(horoscopeMatch("Leo", "Scorpio")); // should return "30%".

/*
Horoscope Match
Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:

Distance	Compatibility
0	"100%"
1	"40%"
2	"80%"
3	"30%"
4	"90%"
5	"20%"
6	"50%"

*/
