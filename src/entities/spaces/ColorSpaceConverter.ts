import { HEX, toHEX } from "./HEX";
import { RGB, toRGB } from "./RGB";
import { HSL, toHSL } from "./HSL";

const HEX_PATTERN = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const hex2rgb = (hex: HEX): RGB => {
  const result = HEX_PATTERN.exec(hex)!;

  return toRGB(
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  )!;
};

export const hex2hsl = (hex: HEX): HSL => {
  return rgb2hsl(hex2rgb(hex));
};

export const rgb2hsl = (rgb: RGB): HSL => {
  const [r, g, b] = Object.values(rgb).map((v: number) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const l = (max + min) * 50;

  if (max === min) {
    return toHSL(0, 0, l);
  }

  const d = max - min;
  const s = l > 50 ? (d * 100) / (2 - max - min) : (d * 100) / (max + min);

  const h = (() => {
    if (min === b) {
      return (60 * (g - r)) / d + 60;
    }
    if (min === r) {
      return (60 * (b - g)) / d + 180;
    }
    return (60 * (r - b)) / d + 300;
  })();

  return toHSL(h, s, l);
};

export const rgb2hex = (rgb: RGB): HEX => {
  return toHEX(
    Object.values(rgb)
      .map((v: number) => v.toString(16).padStart(2, "0"))
      .join("")
  )!;
};

export const hsl2rgb = (hsl: HSL): RGB => {
  const [h, s, l] = [hsl.h, hsl.s / 100, hsl.l / 100];
  const d = l >= 0.5 ? s * (1 - l) : s * l;
  const [max, min] = [(l + d) * 255, (l - d) * 255];

  if (h === 0) {
    return toRGB(max, max, max)!;
  }
  if (h <= 60) {
    return toRGB(max, min + ((max - min) * h) / 60, min)!;
  }
  if (h <= 120) {
    return toRGB(min + ((max - min) * (120 - h)) / 60, max, min)!;
  }
  if (h <= 180) {
    return toRGB(min, max, min + ((max - min) * (h - 120)) / 60)!;
  }
  if (h <= 240) {
    return toRGB(min, min + ((max - min) * (240 - h)) / 60, max)!;
  }
  if (h <= 300) {
    return toRGB(min + ((max - min) * (h - 240)) / 60, min, max)!;
  }
  return toRGB(max, min, min + ((max - min) * (360 - h)) / 60)!;
};

export const hsl2hex = (hsl: HSL): HEX => {
  return rgb2hex(hsl2rgb(hsl));
};
