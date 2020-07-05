const SHORT_HEX_PATTERN = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const HEX_PATTERN = /^#?([a-f\d]{6})$/i;

export type HEX = string & {
  readonly _HEXBrand: unique symbol;
};

export const toHEX = (s: string): HEX | undefined => {
  const hex = s.replace(
    SHORT_HEX_PATTERN,
    (_, r, g, b) => r + r + g + g + b + b
  );
  const result = HEX_PATTERN.exec(hex);
  return result ? (`#${result[1]}` as HEX) : undefined;
};
