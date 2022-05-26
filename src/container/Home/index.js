import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, CircularProgress } from "@mui/material";
import Chart from "../../components/Chart";
import useFetch from "../../hook/useFetch";
import AssetTable from "../../components/AssetTable";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 6%",

    [theme.breakpoints.down("md")]: {
      padding: "20px 5px",
    },
  },
  loading: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function Home({ userId }) {
  const classes = useStyles();
  const [assetType, setAssetType] = useState("all");
  const url = userId ? process.env.REACT_APP_MOCK_API + userId : "";
  let { filteredData, loading, error, filterData, data } = useFetch(
    url,
    assetType
  );

  const changeAssetType = (e) => {
    setAssetType(e.target.value);
  };

  useEffect(() => filterData(assetType), [assetType, url]);

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress size={60} />
      </div>
    );
  }
  if (filteredData === null) return null;

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={6} style={{ margin: "0 auto" }}>
          <Chart data={filteredData} totalData={data} />
        </Grid>
        <Grid item sm={12} md={6}>
          <AssetTable
            assetType={assetType}
            changeAsset={changeAssetType}
            data={filteredData}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
