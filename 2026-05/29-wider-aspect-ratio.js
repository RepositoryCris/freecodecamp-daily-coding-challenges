//from Math import Math.GDC

function getWiderAspectRatio(a, b) {
  const [w1, h1] = a.split("x");
  const [w2, h2] = b.split("x");
  //console.log(w1, h1)
  const ratio1 = w1 / h1;
  const ratio2 = w2 / h2;
  //console.log(ratio1, ratio2)

  const compare = (ratio1, ratio2) => {
    if (ratio1 > ratio2) {
      return [w1, h1];
    } else {
      return [w2, h2];
    }
  };

  const greater_width_to_height_ratio = compare(ratio1, ratio2);

  //console.log(greater_width_to_height_ratio[0])
  //console.log(greater_width_to_height_ratio[1])

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    let remainder = 0;
    while (b != 0) {
      remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  };

  const gcd_number = gcd(
    greater_width_to_height_ratio[0],
    greater_width_to_height_ratio[1],
  );

  const width = greater_width_to_height_ratio[0] / gcd_number;
  const height = greater_width_to_height_ratio[1] / gcd_number;

  return `${width}:${height}`;
}

console.log(getWiderAspectRatio("1920x1080", "800x600")); // should return "16:9"

console.log(getWiderAspectRatio("1080x1350", "2048x1536")); // should return "4:3".
console.log(getWiderAspectRatio("640x480", "2440x1220")); // should return "2:1".
console.log(getWiderAspectRatio("360x640", "1080x1920")); // should return "9:16".
console.log(getWiderAspectRatio("3440x1440", "2048x858")); // should return "43:18".
console.log(getWiderAspectRatio("12345x61234", "12534x51234")); // should return "2089:8539".

/*
Wider Aspect Ratio
Given two strings for different image dimensions, return the aspect ratio of the image with a greater width-to-height ratio.

The given strings will be in the format "WxH", for example, "1920x1080".
The aspect ratio is the ratio of width to height, reduced to the lowest whole numbers. For example, "1920x1080" reduces to "16:9".
Return a string in format "W:H", for example, "16:9".
*/
