import React, { useState } from "react";
import "boxicons";
import { Box, MenuItem, MenuList, Typography } from "@mui/material";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    if (menu == false) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 150px",
          position: "relative",
        }}
      >
        <Typography
          onClick={handleMenu}
          sx={{ cursor: "pointer", "&:active": { transform: "scale(0.9)" } }}
        >
          <box-icon name="menu" size="40px"></box-icon>
        </Typography>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          color="#c4c4c4"
          fontFamily={"cursive"}
        >
          Logo
        </Typography>

        <Box
          width={"300px"}
          height={"100vh"}
          bgcolor={"#000000f0"}
          zIndex={111}
          position={"absolute"}
          padding={3}
          sx={
            menu
              ? { left: 0, top: 0, transition: "all 1s" }
              : { top: 0, left: "-400px", transition: "all 1s" }
          }
        >
          <Typography textAlign={"right"} onClick={handleMenu}>
            <box-icon
              name="x"
              size="36px"
              color="white"
              style={{
                cursor: "pointer",
              }}
            ></box-icon>
          </Typography>
          <MenuList
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <MenuItem sx={{ fontSize: "22px", color: "white" }}>خانه</MenuItem>
            <MenuItem sx={{ fontSize: "22px", color: "white" }}>
              ارتباط با ما
            </MenuItem>
            <MenuItem sx={{ fontSize: "22px", color: "white" }}>
              تماس با ما
            </MenuItem>
          </MenuList>
        </Box>
      </nav>
    </>
  );
}
