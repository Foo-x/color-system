export type Percent = number & {
  readonly _PercentBrand: unique symbol;
};

export const toPercent = (n: number): Percent => {
  return n as Percent;
};

export const clampBetween0And1 = (percent: Percent): Percent => {
  if (percent < 0) {
    return 0 as Percent;
  }
  if (percent > 1) {
    return 1 as Percent;
  }
  return percent;
};

export const toString = (percent: Percent): string => {
  return `${percent * 100}%`;
};

const PERCENT_PATTERN = /^(\d+(?:\.\d+)?)%$/;

export const fromString = (s: string): Percent | undefined => {
  const match = PERCENT_PATTERN.exec(s);
  if (!match) {
    return;
  }

  return parseFloat(match[1]) as Percent;
};
