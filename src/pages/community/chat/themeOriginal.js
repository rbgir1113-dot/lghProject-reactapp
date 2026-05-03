import theme from "../../../styles/theme";

export const colors = {
  primary:      theme.PALETTE.primary.main,
  primaryLight: theme.PALETTE.primary.extraLight,
  gradientMain: theme.GRADIENT.deepBlue,
  textWhite:    theme.PALETTE.white,
  textMain:     theme.TEXT_COLOR.basic,
  textSub:      theme.GRAYSCALE[9],
  bgCard:       "#FFFFFF",
  bgSection:    theme.GRAYSCALE[10],
  bgPage:       theme.GRAYSCALE[10],
  border:       theme.GRAYSCALE[8],
  live:         theme.PALETTE.secondary.main,
  red:          theme.PALETTE.red,
};

export const fonts = {
  family: "'pretendard', sans-serif",
  weight: {
    light:   theme.FONT_WEIGHT.light,
    regular: theme.FONT_WEIGHT.regular,
    medium:  theme.FONT_WEIGHT.medium,
    bold:    theme.FONT_WEIGHT.bold,
  },
  size: {
    xs:   theme.FONT_SIZE.h12,
    sm:   theme.FONT_SIZE.h11,
    md:   theme.FONT_SIZE.h10,
    base: theme.FONT_SIZE.h9,
    xl:   theme.FONT_SIZE.h7,
  },
};

export const radius = {
  card:   "20px",
  pill:   "100px",
  button: "12px",
  input:  "8px",
  sm:     "6px",
};

export const shadows = {
  float: "0 8px 24px rgba(0, 0, 0, 0.12)",
};
