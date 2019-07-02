# Simple Color Hash - My 1st npm package

There is something about pushing your 1st npm package. It is the first time that I felt I was actually giving something back to the open source community. It was the first time others could seamlessly use my code. It was a moment of pride. I felt unstoppable (right up until I reviewed my sprint plan for the week).

Before we jump into what the color hash does, we need to first understand the hsl color system. Why HSL? Of the 3 popular color systems RGB, HEX, and HSL, HSL provides the most intuitive way for us to generate a color of our choice. In fact, the system was first designed by computer graphics researchers in the 1970s to align with the way human vision perceives the attributes of color. For example, if we want a deep shade of maroon, it is hard to know what proportions of red, green and blue there needs to be. So, it is hard to construct these in the RGB or the HEX system manually. However as we will see below, it is a lot easier to tweak HSL values to get the color we want.

## The HSL Color System

HSL - Hue, Saturation and Lightness

Look at the color wheel above.

Hue - is a measure of how many degrees around on that wheel the color is. As the wheel shows, red has a hue of 0 degrees, green has a hue of 120 degrees and blue has a hue of 240 degrees.

Saturation - is a measure of the intensity of the color. Colors on the edge of the wheel have a saturation of 100% and are as colorful as possibly can be. On moving inwards on the wheel the saturation goes down and at 0% saturation, the color is grey.

Lightness - also referred to as luminosity or brighness, specifies how far away the color is from black or white. A lightness value of 0% is pitch black and 100% is pure white. At 50%, the color is perfectly balanced between white and black.

## How to use it?

You install the package from npm using the command:

```node
npm i simple-color-hash
```

Once added, import the default `generateColorHash` function

```js
import generateColorHash from "simple-color-hash";
```

```js
const input = "Ashwanth A R";
const output = generateColorHash({ str: input }); // returns hex value
```

It's that simple. The color hash generator returns a hex code value.

If you want to configure more options, you can additionally provide hue, saturation, lightness, hash function and scheme.

```js
const input = "Ashwanth A R";
const output = generateColorHash({
  str: input,
  hue: { min: 210, max: 450 },
  sat: { min: 0.35, max: 0.65 },
  light: { min: 0.4, max: 0.6 },
  scheme: "rgb",
  hashFunction: customHash
});
```

You can find the package on npm [here](https://www.npmjs.com/package/simple-color-hash)

## Color Hash

### Generating the Color Hash

```js
/**
 *
 * @param {Object} {
 *  str: String to be hashed,
 *  hue: { min, max } values (in deg)
 *  sat: { min, max } values (0 to 1)
 *  light: { min, max } values (0 to 1),
 *  hashFunction: Custom hash function,
 *  scheme: return scheme
 * }
 */
const generateColorHash = ({
  str,
  hue = { min: 0, max: 360 },
  sat = { min: 0.35, max: 0.65 },
  light = { min: 0.3, max: 0.7 },
  hashFunction = standardHashFunction,
  scheme = "hex"
}) => {
  const [H, S, L] = hslGeneration(hashFunction(str), hue, sat, light);
  const RGBArray = hslToRgb(H / 360, S, L);
  const hex = rgbToHex(RGBArray);
  if (scheme === "hsl") return [H, S, L];
  else if (scheme === "rgb") return RGBArray;
  return hex;
};
```

The `generateColorHash` function is the default export of the package. It needs to be passed in an object with an `str` attribute which is the string that needs to be hashed. The other attributes of the object to passed in are optional. They are concerned with the options that you want to configure the hash with.

You can provide values for the ranges of hue, saturation and lightness. You can also override the hash function with your own custom hash function. Attributes `hue`, `sat` and `light` take in an object with min and max values. The generated color will be restricted within the provided range. The `generateColorHash` function returns an object with the generated color in the one of three formats as determined by the scheme parameter: hsl, rgb and hex. By default it returns the value in hex format.

### Hash Function

```js
/**
 *
 * @param {string} str string to hash
 */
const standardHashFunction = str =>
  str.split("").reduce((hash, char, id) => hash + char.charCodeAt(0) * id, 0);
```

The standard hash function provided in the package iterates through every letter and generates the hash taking into account the position of the character and the value of the character.

### HSL Generator

```js
/**
 *
 * @param {string} hash generated hash
 * @param {number} hue Hue
 * @param {number} sat Saturation
 * @param {number} light Lightness
 */
const hslGeneration = (hash, hue, sat, light) => {
  const hashFactor = (hash % 1009) / 1009; // 1009 is a prime
  const generateWithinRange = (val, min, max) => val * (max - min) + min;
  const H = generateWithinRange(hashFactor, hue.min, hue.max);
  const S = generateWithinRange(hashFactor, sat.min, sat.max);
  const L = generateWithinRange(hashFactor, light.max, light.min);
  return [H, S, L];
};
```

To generate the colors, we need to get our `hashFactor` sized down to between 0 and 1. To do this we get the remainder of dividing by 1009 (which is a prime number). You can choose just about any prime. We divide the remainder which will always be between 0 and 1009 by 1009 which gives us our `hashFactor` between 0 and 1.

We then use this `hashFactor` to generate a value within the provided ranges for hue, saturation and lightness.

### HSL to RGB and RGB to HEX conversions

```js
/**
 *
 * @param {Array} RGBArray
 */
const rgbToHex = RGBArray =>
  RGBArray.reduce((hex, rgb) => {
    if (rgb < 16) return `${hex}0${rgb.toString(16)}`;
    return hex + rgb.toString(16);
  }, "#");

/**
 *
 * @param {number} H Hue
 * @param {number} S Saturation
 * @param {number} L Lightness
 */
const hslToRgb = (H, S, L) => {
  const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
  const p = 2 * L - q;
  const hueToRgb = (p, q, t) => {
    let preRGB = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
    if (preRGB < 1 / 6) preRGB = p + (q - p) * 6 * preRGB;
    else if (preRGB < 1 / 2) preRGB = q;
    else if (preRGB < 2 / 3) preRGB = p + (q - p) * 6 * (2 / 3 - preRGB);
    else preRGB = p;
    return Math.round(preRGB * 255);
  };
  const R = hueToRgb(p, q, H + 1 / 3);
  const G = hueToRgb(p, q, H);
  const B = hueToRgb(p, q, H - 1 / 3);
  return [R, G, B];
};
```

These conversions are done using the basic formulas that are used to convert from one color system to the other so there isn't much to explain here except look at the formulas. And that's the gist of the color hash function.

### To be continued
