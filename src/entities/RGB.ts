import { UInt8, toUInt8 } from "./UInt8";

export interface RGB {
  r: UInt8;
  g: UInt8;
  b: UInt8;
}

export const toRGB = (r: number, g: number, b: number): RGB | undefined => {
  const newR = toUInt8(r);
  const newG = toUInt8(g);
  const newB = toUInt8(b);

  if (!newR || !newG || !newB) {
    return;
  }

  return {
    r: newR,
    g: newG,
    b: newB,
  };
};
