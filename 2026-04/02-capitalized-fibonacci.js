function capitalizeFibonacci(str) {
  function fibonacci(n) {
    if (n <= 0) return "Error";

    // Start with the base sequence
    const fib = [0, 1];

    // If they only wanted one, slice it and return
    if (n === 1) return [0];

    // The loop starts at index 2 because indices 0 and 1 are already filled
    for (let i = 2; i < n; i++) {
      // Each new number is just the sum of the two previous indices
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  const fib = fibonacci(str.length);
  let fibString = "";

  for (let k = 0; k < str.length; k++) {
    // Check if the current index 'k' is one of our Fibonacci numbers
    if (fib.includes(k)) {
      fibString += str[k].toUpperCase();
    } else {
      fibString += str[k].toLowerCase();
    }
  }

  return fibString;
}

console.log(capitalizeFibonacci("hello world")); // should return "HELLo woRld".
console.log(capitalizeFibonacci("HELLO WORLD")); // should return "HELLo woRld".
console.log(capitalizeFibonacci("hello, world!")); // should return "HELLo, wOrld!".
console.log(
  capitalizeFibonacci("The quick brown fox jumped over the lazy dog."),
); // should return "THE qUicK broWn fox jUmped over thE lazy dog.".
console.log(
  capitalizeFibonacci(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.",
  ),
); // should return "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".

/*
Capitalized Fibonacci
Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.



The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

The first character is at index 0.
If the index of non-letter characters is a Fibonacci number, leave it unchanged.
*/

// THIS PART IS JUST TO INVESTIGATE MORE ABOUT FIBONACCI
// /**
//  * FIBONACCI IMPLEMENTATIONS FOR PRODUCTION
//  */

// // 1. THE ITERATIVE APPROACH (Industry Standard)
// // Best for: Memory efficiency and performance. O(n) time, O(1) space.
// function fibIterative(n) {
//   if (n < 0) return "Error";
//   if (n === 0) return 0n;
//   let a = 0n,
//     b = 1n;
//   for (let i = 2; i <= n; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// }

// // 2. THE MEMOIZED RECURSIVE APPROACH
// // Best for: Functional programming where caching results is a priority.
// function fibMemoized(n, memo = new Map()) {
//   if (n < 0) return "Error";
//   if (n <= 1) return BigInt(n);
//   if (memo.has(n)) return memo.get(n);

//   const result = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
//   memo.set(n, result);
//   return result;
// }

// // 3. THE TAIL-RECURSIVE APPROACH
// // Best for: Clean recursive logic that behaves like a loop (if TCO is supported).
// function fibTailRecursive(n, a = 0n, b = 1n) {
//   if (n < 0) return "Error";
//   if (n === 0) return a;
//   if (n === 1) return b;
//   return fibTailRecursive(n - 1, b, a + b);
// }

// // 4. THE GENERATOR APPROACH (Systems/Stream Logic)
// // Best for: Generating a sequence on-the-fly without storing it all in memory.
// function* fibGenerator() {
//   let a = 0n;
//   let b = 1n;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// /**
//  * USAGE EXAMPLES
//  */

// console.log("--- Iterative (F(10)) ---");
// console.log(fibIterative(10)); // 55n

// console.log("\n--- Memoized (F(50)) ---");
// console.log(fibMemoized(50)); // 12586269025n

// console.log("\n--- Tail Recursive (F(8)) ---");
// console.log(fibTailRecursive(8)); // 21n

// console.log("\n--- Generator (First 5 numbers) ---");
// const gen = fibGenerator();
// for (let i = 0; i < 5; i++) {
//   console.log(gen.next().value); // 0n, 1n, 1n, 2n, 3n
// }

// // Example for your String Capitalization problem using the Generator:
// function capitalizeWithGen(str) {
//   const gen = fibGenerator();
//   let nextFib = Number(gen.next().value);
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i === nextFib) {
//       result += str[i].toUpperCase();
//       nextFib = Number(gen.next().value);
//       // Handle the duplicate '1' in Fibonacci sequence
//       if (nextFib === i) nextFib = Number(gen.next().value);
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log("\n--- String Task Example ---");
// console.log(capitalizeWithGen("hello world")); // "HELLo woRld"
