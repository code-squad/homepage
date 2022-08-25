import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      display: {
        lg: string;
        md: string;
        sm: string;
      };
      bold: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
      body: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
    fontWeight: {
      bold: number;
      medium: number;
      regular: number;
    };
    lineHeight: {
      display: {
        lg: string;
        md: string;
        sm: string;
      };
      bold: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
      body: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
    letterSpacing: string;
    color: {
      blackAndWhite: {
        black: string;
        white: string;
      };
      greyScale: {
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
      };
      surface: {
        offWhite1: string;
        offWhite2: string;
        black20: string;
        white20: string;
      };
      primary: {
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
      };
      secondary: {
        blue1: string;
        blue2: string;
        blue3: string;
      };
    };
    device: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
