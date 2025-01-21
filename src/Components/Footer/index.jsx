import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          height: "130px",
          backgroundColor: "#292929",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"80px",
        }}
      >
        <Typography fontSize={'20px'} fontWeight={'bold'}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </Typography>
      </footer>
    </>
  );
}
