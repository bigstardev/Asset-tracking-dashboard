import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AssetType from "../Select";
import { convertToPercentage, totalValue } from "../../Utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 32px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 8px",
    },
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    flexGrow: 1,
  },
  grey: {
    background: "#fafafa",
  },
  theader: {
    fontWeight: 500,
    fontSize: "1.1rem",
    background: "#a9abaa",
  },
  tcell: {
    borderRight: "1px solid rgb(224, 224, 224)",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },
  tableContainer: {
    border: "1px solid rgb(224, 224, 224)",
  },
}));
export default function AssetTable({ data, assetType, changeAsset }) {
  const classes = useStyles();
  const total = totalValue(data);
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mb: "16px",
        }}
      >
        <Typography className={classes.title}>Portfolio Holdings</Typography>
        <Box>
          <AssetType currentType={assetType} changeAssetType={changeAsset} />
        </Box>
      </Box>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="asset table">
          <TableHead>
            <TableRow>
              <TableCell className={`${classes.theader} ${classes.tcell}`}>
                Name
              </TableCell>
              <TableCell className={`${classes.theader} ${classes.tcell}`}>
                Ticker
              </TableCell>
              <TableCell className={`${classes.theader} ${classes.tcell}`}>
                Percentage (%)
              </TableCell>
              <TableCell className={`${classes.theader} ${classes.tcell}`}>
                Amount ($)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { borderBottom: 0 },
                  }}
                  className={`${index % 2 === 0 ? classes.grey : ""}`}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tcell}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell className={classes.tcell}>{row.ticker}</TableCell>
                  <TableCell className={classes.tcell}>
                    {convertToPercentage(row.value, total)}
                  </TableCell>
                  <TableCell className={classes.tcell}>{row.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
