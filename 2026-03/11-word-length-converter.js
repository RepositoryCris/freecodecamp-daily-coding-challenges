function convertWords(str) {
  const array = [];
  const aux = str.split(" ");
  aux.forEach((item) => {
    array.push(item.length);
  });
  str = array.join(" ");
  return String(str);
}

console.log("result: ", convertWords("hello world"));

console.log(convertWords("Thanks and happy coding"));
console.log(convertWords("The quick brown fox jumps over the lazy dog"));
console.log(
  convertWords(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl",
  ),
);
