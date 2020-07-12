import { toRGB, RGB } from "../spaces/RGB";

export const tones = [
  "v",
  "b",
  "s",
  "dp",
  "ltp",
  "lt",
  "sf",
  "d",
  "dk",
  "pp",
  "p",
  "ltg",
  "g",
  "dkg",
] as const;
export type Tone = typeof tones[number];

export const vividHues = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
] as const;
export type VividHue = typeof vividHues[number];
const MAX_HUE = 24;

export const hues = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] as const;
export type Hue = typeof hues[number];

export const achromatics = [
  "w",
  "gy9_5",
  "gy8_5",
  "gy7_5",
  "gy6_5",
  "gy5_5",
  "gy4_5",
  "gy3_5",
  "gy2_5",
  "gy1_5",
  "bk",
] as const;
export type Achromatic = typeof achromatics[number];

export type PCCSColor =
  | {
      tone: "v";
      hue: VividHue;
    }
  | {
      tone: Exclude<Tone, "v">;
      hue: Hue;
    }
  | Achromatic;

type IPCCS2RGB = {
  v: {
    [hue in VividHue]: RGB;
  };
} & {
  [tone in Exclude<Tone, "v">]: {
    [hue in Hue]: RGB;
  };
} &
  {
    [achromatic in Achromatic]: RGB;
  };

const PCCS2RGB: IPCCS2RGB = {
  v: {
    1: toRGB(185, 31, 87)!,
    2: toRGB(208, 47, 72)!,
    3: toRGB(221, 68, 59)!,
    4: toRGB(233, 91, 35)!,
    5: toRGB(230, 120, 0)!,
    6: toRGB(244, 157, 0)!,
    7: toRGB(241, 181, 0)!,
    8: toRGB(238, 201, 0)!,
    9: toRGB(210, 193, 0)!,
    10: toRGB(268, 287, 0)!,
    11: toRGB(88, 169, 29)!,
    12: toRGB(0, 161, 90)!,
    13: toRGB(0, 146, 110)!,
    14: toRGB(0, 133, 127)!,
    15: toRGB(0, 116, 136)!,
    16: toRGB(0, 112, 155)!,
    17: toRGB(0, 96, 156)!,
    18: toRGB(0, 91, 165)!,
    19: toRGB(26, 84, 165)!,
    20: toRGB(83, 74, 160)!,
    21: toRGB(112, 63, 150)!,
    22: toRGB(129, 55, 138)!,
    23: toRGB(143, 46, 124)!,
    24: toRGB(173, 46, 108)!,
  },
  b: {
    2: toRGB(239, 108, 112)!,
    4: toRGB(250, 129, 85)!,
    6: toRGB(255, 173, 54)!,
    8: toRGB(250, 216, 49)!,
    10: toRGB(183, 200, 43)!,
    12: toRGB(65, 184, 121)!,
    14: toRGB(0, 170, 159)!,
    16: toRGB(0, 152, 185)!,
    18: toRGB(41, 129, 192)!,
    20: toRGB(117, 116, 188)!,
    22: toRGB(161, 101, 168)!,
    24: toRGB(208, 103, 142)!,
  },
  s: {
    2: toRGB(197, 63, 77)!,
    4: toRGB(204, 87, 46)!,
    6: toRGB(225, 146, 21)!,
    8: toRGB(222, 188, 3)!,
    10: toRGB(156, 173, 0)!,
    12: toRGB(0, 143, 86)!,
    14: toRGB(0, 130, 124)!,
    16: toRGB(0, 111, 146)!,
    18: toRGB(0, 91, 155)!,
    20: toRGB(83, 76, 152)!,
    22: toRGB(124, 61, 132)!,
    24: toRGB(163, 60, 106)!,
  },
  dp: {
    2: toRGB(166, 29, 57)!,
    4: toRGB(171, 61, 29)!,
    6: toRGB(177, 108, 0)!,
    8: toRGB(179, 147, 0)!,
    10: toRGB(116, 132, 0)!,
    12: toRGB(0, 114, 67)!,
    14: toRGB(0, 102, 100)!,
    16: toRGB(0, 84, 118)!,
    18: toRGB(0, 66, 128)!,
    20: toRGB(62, 51, 123)!,
    22: toRGB(97, 36, 105)!,
    24: toRGB(134, 29, 85)!,
  },
  ltp: {
    2: toRGB(241, 152, 150)!,
    4: toRGB(255, 167, 135)!,
    6: toRGB(255, 190, 113)!,
    8: toRGB(242, 217, 110)!,
    10: toRGB(199, 211, 109)!,
    12: toRGB(133, 206, 158)!,
    14: toRGB(98, 192, 181)!,
    16: toRGB(91, 175, 196)!,
    18: toRGB(108, 154, 197)!,
    20: toRGB(144, 145, 195)!,
    22: toRGB(176, 136, 181)!,
    24: toRGB(217, 142, 165)!,
  },
  lt: {
    2: toRGB(246, 171, 165)!,
    4: toRGB(255, 185, 158)!,
    6: toRGB(255, 206, 144)!,
    8: toRGB(251, 230, 143)!,
    10: toRGB(216, 223, 146)!,
    12: toRGB(156, 217, 172)!,
    14: toRGB(126, 204, 193)!,
    16: toRGB(121, 186, 202)!,
    18: toRGB(131, 167, 200)!,
    20: toRGB(162, 159, 199)!,
    22: toRGB(184, 154, 184)!,
    24: toRGB(218, 160, 179)!,
  },
  sf: {
    2: toRGB(202, 130, 129)!,
    4: toRGB(218, 146, 122)!,
    6: toRGB(219, 166, 107)!,
    8: toRGB(211, 189, 108)!,
    10: toRGB(173, 182, 107)!,
    12: toRGB(118, 177, 138)!,
    14: toRGB(84, 163, 155)!,
    16: toRGB(81, 146, 164)!,
    18: toRGB(93, 126, 160)!,
    20: toRGB(120, 120, 160)!,
    22: toRGB(144, 113, 148)!,
    24: toRGB(180, 120, 139)!,
  },
  d: {
    2: toRGB(163, 90, 92)!,
    4: toRGB(175, 105, 84)!,
    6: toRGB(179, 127, 70)!,
    8: toRGB(171, 148, 70)!,
    10: toRGB(133, 143, 70)!,
    12: toRGB(79, 135, 102)!,
    14: toRGB(42, 123, 118)!,
    16: toRGB(36, 106, 125)!,
    18: toRGB(52, 89, 125)!,
    20: toRGB(84, 82, 124)!,
    22: toRGB(108, 74, 113)!,
    24: toRGB(139, 79, 101)!,
  },
  dk: {
    2: toRGB(105, 41, 52)!,
    4: toRGB(117, 54, 42)!,
    6: toRGB(121, 77, 28)!,
    8: toRGB(116, 96, 31)!,
    10: toRGB(82, 91, 32)!,
    12: toRGB(35, 82, 58)!,
    14: toRGB(0, 71, 70)!,
    16: toRGB(0, 69, 88)!,
    18: toRGB(18, 52, 82)!,
    20: toRGB(50, 45, 81)!,
    22: toRGB(67, 40, 72)!,
    24: toRGB(97, 45, 70)!,
  },
  pp: {
    2: toRGB(232, 194, 191)!,
    4: toRGB(235, 194, 181)!,
    6: toRGB(244, 212, 176)!,
    8: toRGB(242, 230, 184)!,
    10: toRGB(216, 221, 173)!,
    12: toRGB(174, 212, 185)!,
    14: toRGB(166, 212, 204)!,
    16: toRGB(173, 209, 218)!,
    18: toRGB(175, 192, 209)!,
    20: toRGB(187, 189, 208)!,
    22: toRGB(200, 185, 201)!,
    24: toRGB(222, 196, 202)!,
  },
  p: {
    2: toRGB(231, 213, 212)!,
    4: toRGB(233, 213, 207)!,
    6: toRGB(246, 227, 206)!,
    8: toRGB(239, 230, 198)!,
    10: toRGB(230, 233, 198)!,
    12: toRGB(196, 224, 203)!,
    14: toRGB(191, 224, 217)!,
    16: toRGB(198, 221, 226)!,
    18: toRGB(194, 204, 213)!,
    20: toRGB(201, 202, 213)!,
    22: toRGB(208, 200, 209)!,
    24: toRGB(228, 213, 217)!,
  },
  ltg: {
    2: toRGB(192, 171, 170)!,
    4: toRGB(193, 171, 165)!,
    6: toRGB(206, 187, 168)!,
    8: toRGB(198, 190, 161)!,
    10: toRGB(189, 193, 162)!,
    12: toRGB(157, 182, 165)!,
    14: toRGB(152, 182, 177)!,
    16: toRGB(158, 180, 185)!,
    18: toRGB(155, 165, 175)!,
    20: toRGB(162, 162, 175)!,
    22: toRGB(171, 160, 171)!,
    24: toRGB(189, 172, 176)!,
  },
  g: {
    2: toRGB(116, 92, 92)!,
    4: toRGB(117, 92, 87)!,
    6: toRGB(128, 108, 92)!,
    8: toRGB(120, 111, 87)!,
    10: toRGB(110, 114, 90)!,
    12: toRGB(83, 102, 90)!,
    14: toRGB(78, 103, 100)!,
    16: toRGB(79, 101, 108)!,
    18: toRGB(76, 87, 101)!,
    20: toRGB(86, 85, 102)!,
    22: toRGB(96, 82, 98)!,
    24: toRGB(114, 92, 99)!,
  },
  dkg: {
    2: toRGB(62, 45, 48)!,
    4: toRGB(63, 46, 44)!,
    6: toRGB(74, 60, 50)!,
    8: toRGB(68, 62, 48)!,
    10: toRGB(61, 64, 51)!,
    12: toRGB(42, 52, 46)!,
    14: toRGB(39, 52, 52)!,
    16: toRGB(39, 52, 57)!,
    18: toRGB(34, 41, 51)!,
    20: toRGB(41, 39, 52)!,
    22: toRGB(48, 37, 49)!,
    24: toRGB(61, 46, 52)!,
  },
  w: toRGB(255, 255, 255)!,
  gy9_5: toRGB(241, 241, 241)!,
  gy8_5: toRGB(214, 214, 214)!,
  gy7_5: toRGB(187, 187, 187)!,
  gy6_5: toRGB(161, 161, 161)!,
  gy5_5: toRGB(135, 135, 135)!,
  gy4_5: toRGB(109, 109, 109)!,
  gy3_5: toRGB(84, 84, 84)!,
  gy2_5: toRGB(60, 60, 60)!,
  gy1_5: toRGB(39, 39, 39)!,
  bk: toRGB(0, 0, 0)!,
};

const isAchromaticColor = (color: PCCSColor): color is Achromatic => {
  return achromatics.some((a) => a === color);
};

export const pccs2rgb = (color: PCCSColor): RGB => {
  if (isAchromaticColor(color)) {
    return PCCS2RGB[color];
  }
  if (color.tone === "v") {
    return PCCS2RGB[color.tone][color.hue];
  }
  return PCCS2RGB[color.tone][color.hue];
};

const differentHues = (
  base: VividHue,
  diff: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
): Array<VividHue> => {
  const plusHue = (((base + diff - 1) % MAX_HUE) + 1) as VividHue;
  const minusHue = (((base - diff + MAX_HUE - 1) % MAX_HUE) + 1) as VividHue;
  return plusHue === minusHue ? [plusHue] : [plusHue, minusHue];
};

export const adjacentHues = (base: VividHue): Array<VividHue> => {
  return differentHues(base, 1);
};

export const analogousHues = (base: VividHue): Array<VividHue> => {
  return [...differentHues(base, 2), ...differentHues(base, 3)];
};

export const midDifferenceHues = (base: VividHue): Array<VividHue> => {
  return [
    ...differentHues(base, 4),
    ...differentHues(base, 5),
    ...differentHues(base, 6),
    ...differentHues(base, 7),
  ];
};

export const opponentHues = (base: VividHue): Array<VividHue> => {
  return [
    ...differentHues(base, 8),
    ...differentHues(base, 9),
    ...differentHues(base, 10),
  ];
};

export const complementaryHues = (base: VividHue): Array<VividHue> => {
  return [...differentHues(base, 11), ...differentHues(base, 12)];
};
