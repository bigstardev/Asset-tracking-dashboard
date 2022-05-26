import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function AssetType({ currentType, changeAssetType }) {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="asset-type">AssetType</InputLabel>
      <Select
        labelId="asset-type"
        id="asset-type"
        value={currentType}
        label="AssetType"
        onChange={changeAssetType}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"stock"}>Stock</MenuItem>
        <MenuItem value={"crypto"}>Crypto</MenuItem>
        <MenuItem value={"nft"}>Nft</MenuItem>
        <MenuItem value={"defi"}>Defi</MenuItem>
        <MenuItem value={"real_estate"}>Real Estate</MenuItem>
      </Select>
    </FormControl>
  );
}
