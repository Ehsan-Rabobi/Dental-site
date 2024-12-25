import React from "react";
import "boxicons";
import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding:"0px 150px"
        }}
      >
        <Typography variant="h3" fontWeight={'bold'} color="#c4c4c4" fontFamily={'cursive'}>Logo</Typography>
        <Typography sx={{cursor:"pointer"}}>
          <box-icon name="menu" size="40px"></box-icon>
        </Typography>
      </nav>
    </>
  );
}
