function favoriteSongs(playlist) {
  return playlist
    .map((song) => ({ title: song.title, plays: song.plays }))
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map((song) => song.title);
}

console.log(
  favoriteSongs([
    { title: "Sync or Swim", plays: 3 },
    { title: "Byte Me", plays: 1 },
    { title: "Earbud Blues", plays: 2 },
  ]),
); // should return ["Sync or Swim", "Earbud Blues"].
console.log(
  favoriteSongs([
    { title: "Skip Track", plays: 98 },
    { title: "99 Downloads", plays: 99 },
    { title: "Clickwheel Love", plays: 100 },
  ]),
); // should return ["Clickwheel Love", "99 Downloads"].
console.log(
  favoriteSongs([
    { title: "Song A", plays: 42 },
    { title: "Song B", plays: 99 },
    { title: "Song C", plays: 75 },
  ]),
); // should return ["Song B", "Song C"].

/*
Favorite Songs
Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

Each object will have a "title" property (string), and a "plays" property (integer).
*/
