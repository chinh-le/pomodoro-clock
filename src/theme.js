const SLATEGRAY = 'rgb(112, 128, 144)'; // #708090
const GOLDENROD = 'rgb(218, 165, 32)'; // #daa520
const CORNSILK = 'rgb(255, 248, 220)'; // #fff8dc
const INPUT_BG = 'rgb(186, 200, 214)';
const LABEL_BG = 'rgb(134, 151, 169)'; // #8697a9

const theme = {
  componentBg: SLATEGRAY,
  break: {
    labelBg: {
      off: LABEL_BG,
      on: CORNSILK,
    },
    inputBg: INPUT_BG,
  },
  session: {
    labelBg: {
      off: LABEL_BG,
      on: GOLDENROD,
    },
    inputBg: INPUT_BG,
  },
  timeColor: {
    break: CORNSILK,
    session: GOLDENROD,
  },
  controls: {
    on: 'action', // Material UI SVG icon theme
    off: 'disabled', // Material UI SVG icon theme
  },
};

export default theme;
