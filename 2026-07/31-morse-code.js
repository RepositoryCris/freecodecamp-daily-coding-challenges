function decodeMorse(code) {
  const morse_to_text = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  };

  const words = code.split("   ");

  console.log("words", words);

  const letters = code.split(" ");

  console.log("letters", letters);

  return code;
}

console.log(decodeMorse("--..")); // should return "Z".
console.log(decodeMorse("... --- ...")); // should return "SOS".
console.log(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.")); // should return "FREECODECAMP".
console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // should return "HELLO WORLD".
console.log(
  decodeMorse(
    "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.",
  ),
); // should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".

/*
Morse Code
Given a Morse code string, return the decoded message using the following table:

Code	Letter	Code	Letter
.-	A	-.	N
-...	B	---	O
-.-.	C	.--.	P
-..	D	--.-	Q
.	E	.-.	R
..-.	F	...	S
--.	G	-	T
....	H	..-	U
..	I	...-	V
.---	J	.--	W
-.-	K	-..-	X
.-..	L	-.--	Y
--	M	--..	Z
Letters are separated by a single space
Words are separated by three spaces
 */
