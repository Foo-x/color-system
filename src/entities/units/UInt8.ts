export type UInt8 = number & {
  readonly _UInt8Brand: unique symbol;
};

export const toUInt8 = (n: number): UInt8 | undefined => {
  if (n < 0 || n > 255) {
    return;
  }

  return n as UInt8;
};
