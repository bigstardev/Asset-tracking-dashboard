import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import { Box } from "@mui/material";
import useDebounce from "../hook/useDebounce";

export default function App() {
  const [userId, setUserId] = useState("");
  const debouncedUserId = useDebounce(userId, 500);

  return (
    <Box>
      <Header userId={userId} setUserId={setUserId} />
      <Home userId={debouncedUserId} />
    </Box>
  );
}
