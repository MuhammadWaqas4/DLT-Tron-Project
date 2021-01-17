import { createMuiTheme } from "@material-ui/core/styles";

// --goldenrod: #E3A81Bff;
// --onyx: #373C3Eff;
// --jet: #303232ff;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303232",
    },
    secondary: {
      main: "#E3A81B",
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      disableElevation: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#303232",
          color: "#E3A81B",
        },
      },
    },
  },
});

export const buttonPadding = "0.7em 5em";
export const buttonRadius = 25;

export default theme;
