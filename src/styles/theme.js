import { createTheme } from "@mui/material/styles";
const theme = createTheme();
theme.typography.h3 = {
  fontSize: "3rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

export default theme;
