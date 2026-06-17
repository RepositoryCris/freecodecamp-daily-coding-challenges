const mapBritishAmerican = {
  colour: "color",
  flavour: "flavor",
  honour: "honor",
  neighbour: "neighbor",
  labour: "labor",
  humour: "humor",
  centre: "center",
  fibre: "fiber",
  defence: "defense",
  offence: "offense",
  organise: "organize",
  recognise: "recognize",
  analyse: "analyze",
};

// Helper: Split word from punctuation
function splitWord(word) {
  const punctuation = word.match(/[.,!?;:]+$/)?.[0] || "";
  const base = word.replace(/[.,!?;:]+$/, "");
  return { base, punctuation };
}

// Helper: Preserve case pattern
function preserveCase(translated, original) {
  if (original === original.toUpperCase()) {
    return translated.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase() && original.length > 1) {
    return translated[0].toUpperCase() + translated.slice(1);
  }
  return translated;
}

// Helper: Find American equivalent
function findAmerican(word) {
  const lower = word.toLowerCase();

  // Exact match
  if (mapBritishAmerican[lower]) {
    return mapBritishAmerican[lower];
  }

  // Variation match
  for (const [british, american] of Object.entries(mapBritishAmerican)) {
    if (lower.includes(british)) {
      // Replace the root and keep the rest
      return lower.replace(british, american);
    }
  }

  return null;
}

// Main function
function britishToAmerican(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      const { base, punctuation } = splitWord(word);
      const american = findAmerican(base);

      if (american) {
        return preserveCase(american, base) + punctuation;
      }

      return word;
    })
    .join(" ");
}

console.log(britishToAmerican("I love the colour blue.")); // should return "I love the color blue."
console.log(britishToAmerican("The fibre optic cable is new.")); // should return "The fiber optic cable is new."
console.log(
  britishToAmerican("It's an honour to meet someone with such humour."),
); // should return "It's an honor to meet someone with such humor."
console.log(
  britishToAmerican(
    "The unrecognised artist analysed his colour palette at the centre.",
  ),
); // should return "The unrecognized artist analyzed his color palette at the center."
console.log(
  britishToAmerican(
    "The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful.",
  ),
); // should return "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful."

/*
British to American
Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:

British	American
"colour"	"color"
"flavour"	"flavor"
"honour"	"honor"
"neighbour"	"neighbor"
"labour"	"labor"
"humour"	"humor"
"centre"	"center"
"fibre"	"fiber"
"defence"	"defense"
"offence"	"offense"
"organise"	"organize"
"recognise"	"recognize"
"analyse"	"analyze"
Replacements should be case-insensitive. For example, "Colour" should become "Color".
The input may contain words that build on the exact spelling of a root in the table that also need to be changed. For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".
*/
