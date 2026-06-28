function getPeriodicSpelling(word) {
  // Create a Set of element symbols for O(1) lookup
  const elementSet = new Set(periodicElements.map((el) => el.toLowerCase()));

  // Store the original casing for each element
  const elementMap = {};
  periodicElements.forEach((el) => {
    elementMap[el.toLowerCase()] = el;
  });

  const result = [];

  function backtrack(startIndex) {
    // Base case: we've consumed the entire word
    if (startIndex === word.length) {
      return true;
    }

    // Try 1-letter symbol
    const oneLetter = word[startIndex].toLowerCase();
    if (elementSet.has(oneLetter)) {
      result.push(elementMap[oneLetter]);
      if (backtrack(startIndex + 1)) {
        return true;
      }
      result.pop(); // Backtrack
    }

    // Try 2-letter symbol (if there are at least 2 characters left)
    if (startIndex + 1 < word.length) {
      const twoLetters = word.slice(startIndex, startIndex + 2).toLowerCase();
      if (elementSet.has(twoLetters)) {
        result.push(elementMap[twoLetters]);
        if (backtrack(startIndex + 2)) {
          return true;
        }
        result.pop(); // Backtrack
      }
    }

    return false;
  }

  // Start the backtracking
  if (backtrack(0)) {
    return result;
  } else {
    return [];
  }
}

const periodicElements = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og",
];

console.log(getPeriodicSpelling("neon")); // should return ["Ne", "O", "N"].
console.log(getPeriodicSpelling("rational")); // should return ["Ra", "Ti", "O", "N", "Al"].
console.log(getPeriodicSpelling("yarn")); // should return ["Y", "Ar", "N"].
console.log(getPeriodicSpelling("carbon")); // should return ["C", "Ar", "B", "O", "N"] or ["Ca", "Rb", "O", "N"].
console.log(getPeriodicSpelling("noisy")); // should return ["N", "O", "I", "S", "Y"] or ["No", "I", "S", "Y"].
console.log(getPeriodicSpelling("bicycles")); // should return ["B", "I", "C", "Y", "Cl", "Es"] or ["Bi", "C", "Y", "Cl", "Es"].
console.log(getPeriodicSpelling("optics")); // should return ["O", "P", "Ti", "C", "S"], ["O", "P", "Ti", "Cs"], ["O", "Pt", "I", "C", "S"], or ["O", "Pt", "I", "Cs"].
console.log(getPeriodicSpelling("value")); // should return [].

/*
Periodic Spelling
Given a word, determine if it can be spelled using element symbols from the periodic table.

Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".
Here's a full list of the element symbols:

["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
Return an array of the elements used to spell the word, in their original casing and in the order to spell the word. Or, an empty array if it can't be spelled.
*/
