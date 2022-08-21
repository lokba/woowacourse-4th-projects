const theme = {
  colors: {
    white_100: "#ffffff",
    pink_50: "#ffdeeb",
    pink_100: "#ff385c",
    gray_100: "#e9ecef",
  },
  shadows: {
    basic: "#64646f33 0px 7px 29px 0px",
  },
};

export type Colors = typeof theme.colors;
export type Shadows = typeof theme.shadows;

export default theme;
