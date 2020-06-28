import { Degree, toDegree, clampBetween0And360 } from "./Degree";
import { Percent, toPercent, clampBetween0And1 } from "./Percent";

export interface HSL {
  h: Degree;
  s: Percent;
  l: Percent;
}

export const toHSL = (h: number, s: number, l: number): HSL => {
  const newH = toDegree(h);
  const newS = toPercent(s);
  const newL = toPercent(l);

  return {
    h: clampBetween0And360(newH),
    s: clampBetween0And1(newS),
    l: clampBetween0And1(newL),
  };
};
