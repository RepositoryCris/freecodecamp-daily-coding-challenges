function getElementSize(windowSize, elementVw, elementVh) {
  const w = windowSize.match(/^[0-9]+/);
  const h = windowSize.match(/[0-9]+$/);

  const vw = elementVw.match(/[0-9]+/);
  const vh = elementVh.match(/[0-9]+/);

  const sizeWidth = (vw * w) / 100;
  const sizeHeight = (vh * h) / 100;

  return `${sizeWidth} x ${sizeHeight}`;
}

console.log(getElementSize("1200 x 800", "50vw", "50vh")); // should return "600 x 400".
console.log(getElementSize("320 x 480", "25vw", "50vh")); // should return "80 x 240".
console.log(getElementSize("1000 x 500", "7vw", "3vh")); // should return "70 x 15".
console.log(getElementSize("1920 x 1080", "95vw", "100vh")); // should return "1824 x 1080".
console.log(getElementSize("1200 x 800", "0vw", "0vh")); // should return "0 x 0".
console.log(getElementSize("1440 x 900", "100vw", "114vh")); // should return "1440 x 1026".

/*
Element Size
Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

"vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

"vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.*/
