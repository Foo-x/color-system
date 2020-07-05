const HEXPattern = /^#?([a-f\d]{6}|[a-f\d]{3})$/i;

export type HEX = string & {
  readonly _HEXBrand: unique symbol;
};

export const toHEX = (s: string): HEX | undefined => {
  return HEXPattern.test(s) ? (s as HEX) : undefined;
};
