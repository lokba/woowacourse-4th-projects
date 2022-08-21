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
  devices: {
    mobileS: (adjustment: number = 0) => `(max-width: ${320 + adjustment}px)`,
    mobileM: (adjustment: number = 0) => `(max-width: ${375 + adjustment}px)`,
    mobileL: (adjustment: number = 0) => `(max-width: ${425 + adjustment}px)`,
    tabletM: (adjustment: number = 0) => `(max-width: ${590 + adjustment}px)`,
    tablet: (adjustment: number = 0) => `(max-width: ${768 + adjustment}px)`,
    laptop: (adjustment: number = 0) => `(max-width: ${1024 + adjustment}px)`,
    laptopL: (adjustment: number = 0) => `(max-width: ${1440 + adjustment}px)`,
    desktop: (adjustment: number = 0) => `(max-width: ${2560 + adjustment}px)`,
  },
};

export type Colors = typeof theme.colors;
export type Shadows = typeof theme.shadows;
export type Devices = typeof theme.devices;

export default theme;
