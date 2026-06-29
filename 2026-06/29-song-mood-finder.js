function getMood(genre, bpm) {
  const moodGenreBPM = [
    { mood: "focus", genre: "classical", bpmMin: 60, bpmMax: 109 },
    { mood: "focus", genre: "electronic", bpmMin: 60, bpmMax: 89 },
    { mood: "happy", genre: "pop", bpmMin: 60, bpmMax: 180 },
    { mood: "happy", genre: "classical", bpmMin: 110, bpmMax: 180 },
    { mood: "happy", genre: "rock", bpmMin: 60, bpmMax: 129 },
    { mood: "happy", genre: "electronic", bpmMin: 90, bpmMax: 134 },
    { mood: "hype", genre: "rock", bpmMin: 130, bpmMax: 180 },
    { mood: "hype", genre: "electronic", bpmMin: 135, bpmMax: 180 },
  ];

  const match = moodGenreBPM.find(
    (item) => item.genre === genre && bpm >= item.bpmMin && bpm <= item.bpmMax,
  );

  return match ? match.mood : "unknown";
}

console.log(getMood("rock", 111)); // should return "happy".
console.log(getMood("electronic", 74)); // should return "focus".
console.log(getMood("classical", 180)); // should return "happy".
console.log(getMood("rock", 155)); // should return "hype".
console.log(getMood("electronic", 90)); // should return "happy".
console.log(getMood("classical", 67)); // should return "focus".
console.log(getMood("pop", 100)); // should return "happy".
console.log(getMood("electronic", 135)); // should return "hype".

/*
Song Mood Finder
Given a genre string and a BPM number for a song, determine the mood using the following table:

Mood	Genre	BPM Range
"focus"	"classical"	60–109
"focus"	"electronic"	60–89
"happy"	"pop"	60–180
"happy"	"classical"	110–180
"happy"	"rock"	60–129
"happy"	"electronic"	90–134
"hype"	"rock"	130–180
"hype"	"electronic"	135–180

*/
