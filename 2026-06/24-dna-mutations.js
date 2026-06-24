function detectMutations(strand1, strand2) {
  let mutations = [];
  for (let i = 0; i <= strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      mutations.push(i);
    }
  }
  return mutations;
}

console.log(detectMutations("ATCG", "ATGG")); // should return [2].
console.log(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC")); // should return [4, 9, 11].
console.log(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG")); // should return [].
console.log(
  detectMutations(
    "TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG",
    "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG",
  ),
); // should return [15, 16, 17, 18].
console.log(
  detectMutations(
    "ACGTCAGTACGCACATGACCATTGACATA",
    "AACGTCAGTACGCACATGACCATTGACAT",
  ),
); // should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28].

/*
DNA Mutations
Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).

DNA strands are strings made up of the characters "A", "T", "C", and "G"
Return the indexes in ascending order
If there are no mutations, return an empty array
*/
