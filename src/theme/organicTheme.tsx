import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core";

export const organicTheme = createMuiTheme({
  palette: {
    primary: {
      main: "hsla(269,52%, 37%, 1)",
    },
    secondary: {
      main: "#5f2d91",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
});
