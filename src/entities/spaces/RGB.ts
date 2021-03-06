import { UInt8, toUInt8 } from "../units/UInt8";

export interface RGB {
  r: UInt8;
  g: UInt8;
  b: UInt8;
}

export const toRGB = (r: number, g: number, b: number): RGB | undefined => {
  const newR = toUInt8(r);
  const newG = toUInt8(g);
  const newB = toUInt8(b);

  if (newR === undefined || newG === undefined || newB === undefined) {
    return;
  }

  return {
    r: newR,
    g: newG,
    b: newB,
  };
};
