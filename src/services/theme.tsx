import { createTheme } from "@mui/material/styles";

//Colors' name based on: https://www.color-hex.com/color-names.html
interface Colors {
  white: string;
  whiteSmoke: string;
  red1: string;
  yellow1: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: Colors;
  }

  interface ThemeOptions extends Partial<Theme> {}
}

const colors: Colors = {
  white: "rgba(255,255,255,1)",
  whiteSmoke: "rgba(245,245,245,1)",
  red1: "rgba(255,0,0,1)",
  yellow1: "rgba(255,255,0,1)",
};

export const theme = createTheme({
  colors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#react-app": {
          height: "100%",
        },
        body: {
          height: "100%",
          margin: 0,
        },
        html: {
          height: "100%",
        },
      },
    },
  },
});
