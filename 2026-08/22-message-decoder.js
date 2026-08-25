function decode(message, shift) {
  const words = message.split(" ");
  let decoded = [];

  for (let word of words) {
    let decode = "";

    for (let i = 0; i < word.length; i++) {
      if (/[a-zA-Z]/.test(word[i])) {
        let code = word.charCodeAt(i);
        let shifted;

        // Uppercase (65-90)
        if (code >= 65 && code <= 90) {
          shifted = code - shift; // Reverse the encoding

          // Wrap around if needed
          if (shifted > 90) {
            shifted = shifted - 26;
          } else if (shifted < 65) {
            shifted = shifted + 26;
          }
        }
        // Lowercase (97-122)
        else if (code >= 97 && code <= 122) {
          shifted = code - shift; // Reverse the encoding

          // Wrap around if needed
          if (shifted > 122) {
            shifted = shifted - 26;
          } else if (shifted < 97) {
            shifted = shifted + 26;
          }
        }

        decode = decode + String.fromCharCode(shifted);
      } else {
        decode = decode + word[i];
      }
    }

    decoded.push(decode);
  }

  return decoded.join(" ");
}

// Test cases
console.log(decode("Xlmw mw e wigvix qiwweki.", 4)); // "This is a secret message."
console.log(decode("Byffi Qilfx!", 20)); // "Hello World!"
console.log(decode("Zqd xnt njzx?", -1)); // "Are you okay?"
console.log(decode("oannLxmnLjvy", 9)); // "freeCodeCamp"

/*
Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
*/
