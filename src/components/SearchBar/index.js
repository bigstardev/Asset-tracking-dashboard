import React from "react";
import { makeStyles } from "@mui/styles";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  root: {
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
  },
  icon: {
    paddingRight: "5px",
  },
});
export default function SearchBar({ userId, setUserId }) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <SearchIcon className={classes.icon} />
        <InputBase
          placeholder="Search by User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </Paper>
    </>
  );
}
