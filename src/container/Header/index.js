import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
const useStyles = makeStyles((theme) => ({
  header: {
    padding: "24px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 5%",
    },
  },
  headerTitle: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
}));
export default function Header({ userId, setUserId }) {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography variant="h3" className={classes.headerTitle}>
        AssetDash Portfolio Tracker
      </Typography>
      <SearchBar userId={userId} setUserId={setUserId} />
    </Box>
  );
}
