const fontSize = {
  display: {
    lg: "5.6rem",
    md: "4.8rem",
    sm: "4rem",
  },
  bold: {
    xl: "2.6rem",
    lg: "2rem",
    md: "1.6rem",
    sm: "1.4rem",
    xs: "1.2rem",
  },
  body: {
    xl: "2.4rem",
    lg: "2rem",
    md: "1.6rem",
    sm: "1.4rem",
    xs: "1.2rem",
  },
};

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

const lineHeight = {
  display: {
    lg: "8.2rem",
    md: "7rem",
    sm: "5.8rem",
  },
  bold: {
    xl: "3.8rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.4rem",
    xs: "1.8rem",
  },
  body: {
    xl: "3.6rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.4rem",
    xs: "1.8rem",
  },
};

const letterSpacing = "-0.008em";

const color = {
  blackAndWhite: {
    black: "#1B1B1B",
    white: "#FFFFFF",
  },
  greyScale: {
    grey1: "#3F3F3F",
    grey2: "#777777",
    grey3: "#C4C4C4",
    grey4: "#D9D9D9",
  },
  surface: {
    offWhite1: "#FAFAFA",
    offWhite2: "#F8FAFF",
    black20: "rgba(27, 27, 27, 0.2)",
    white20: "rgba(255, 255, 255, 0.2);",
  },
  primary: {
    green1: "#60B71C",
    green2: "#73C92D",
    green3: "#8AD953",
    green4: "#B4E791",
    orange1: "#CC7210",
    orange2: "#FF8E14",
    orange3: "#FFA543",
    orange4: "#FFC587",
  },
  secondary: {
    blue1: "#1379C4",
    blue2: "#8FDFF3",
    blue3: "#C7E8EF",
    blue4: "#82C6D1",
  },
};

const breakPoint = {
  mobile: 360,
  tablet: 768,
  desktop: 1440,
};

const device = {
  mobile: `screen and (max-width: calc(${breakPoint.tablet}px - 1px))`,
  tablet: `(min-width: ${breakPoint.mobile}px) and (max-width: calc(${breakPoint.desktop}px - 1px))`,
  desktop: `(min-width: ${breakPoint.desktop}px)`,
};

const theme = {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color,
  breakPoint,
  device,
};

export default theme;
