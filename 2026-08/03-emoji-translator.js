function getEmojiPhrase(str) {
  const emojiDictionary = {
    "👶": "baby",
    "🐱": "cat",
    "🐕": "dog",
    "🐟": "fish",
    "🥵": "hot",
    "🧊": "ice",
    "🪨": "rock",
    "🦈": "shark",
    "🍲": "soup",
    "⭐": "star",
  };

  const separated = [...str];

  const translation = separated.map((item) => emojiDictionary[item]).join(" ");

  return translation;
}

console.log(getEmojiPhrase("🪨⭐")); // should return "rock star".
console.log(getEmojiPhrase("🥵🐕")); // should return "hot dog".
console.log(getEmojiPhrase("👶🦈")); // should return "baby shark".
console.log(getEmojiPhrase("⭐🐟")); // should return "star fish".
console.log(getEmojiPhrase("🧊🧊👶")); // should return "ice ice baby".
console.log(getEmojiPhrase("🐱🐟🍲")); // should return "cat fish soup".

/*
Emoji Translator
Given a string of emojis, return the phrase using the following table:

Emoji	Word
👶	"baby"
🐱	"cat"
🐕	"dog"
🐟	"fish"
🥵	"hot"
🧊	"ice"
🪨	"rock"
🦈	"shark"
🍲	"soup"
⭐	"star"
Return the words separated by spaces.
*/
