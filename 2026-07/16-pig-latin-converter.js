function pigLatin(str) {
  return str.replace(/\b(\w)(\w*)\b/g, function (match, first, rest) {
    // Check if first letter is a vowel (case insensitive)
    if (/[aeiou]/i.test(first)) {
      return match + "way";
    } else {
      // Find where the first vowel is in the word
      const vowelIndex = match.search(/[aeiou]/i);

      // If no vowel found, just add 'ay'
      if (vowelIndex === -1) return match + "ay";

      // Split at first vowel and rearrange
      const before = match.slice(0, vowelIndex);
      const after = match.slice(vowelIndex);

      let result = after + before + "ay";

      // Preserve case of first letter
      if (first === first.toUpperCase()) {
        result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
      }

      return result;
    }
  });
}

console.log(pigLatin("universe")); // should return "universeway".
console.log(pigLatin("hello")); // should return "ellohay".
console.log(pigLatin("hello universe")); // should return "ellohay universeway".
console.log(pigLatin("Hello universe")); // should return "Ellohay universeway".
console.log(pigLatin("Pig Latin is fun")); // should return "Igpay Atinlay isway unfay".
console.log(pigLatin("The quick brown fox jumped over the lazy dog")); // should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".

/*
Pig Latin Converter
Given a string, convert it to Pig Latin using the following rules:

If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".
*/
