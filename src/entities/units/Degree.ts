export type Degree = number & {
  readonly _DegreeBrand: unique symbol;
};

export const toDegree = (n: number): Degree => {
  return n as Degree;
};

export const clampBetween0And360 = (n: Degree): Degree => {
  const d = n % 360;
  if (d >= 0) {
    return d as Degree;
  }

  return (d + 360) as Degree;
};
