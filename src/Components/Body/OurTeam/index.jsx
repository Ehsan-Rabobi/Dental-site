import React from "react";
import { Box, ListItem, MenuList, Stack, Typography } from "@mui/material";
import informationTeam from "../../../utils/Team";
import "boxicons";

export default function OurTeam() {
  const items = informationTeam?.map((e, index) => {
    return (
      <>
        <Box
          key={index}
          width={"350px"}
          minHeight={"500px"}
          bgcolor={"white"}
          padding={5}
          borderRadius={"22px 0 0 22px"}
        >
          <Box width={"100%"} height={"35%"}>
            <img
              src={e.img}
              alt=""
              style={{
                width: "100%",
                heigh: "100%",
                objectFit: "cover",
                borderRadius: "15px 0px 0px 15px",
              }}
            />
          </Box>
          <Box width={"100%"} height={"55%"}>
            <Typography variant="h6" color="gray">
              {e.job}
            </Typography>
            <Typography variant="h4" fontFamily={"serif"}>
              {e.name}
            </Typography>
            <Typography textAlign={"justify"}>
              {e.info.slice(0, 79)}...
            </Typography>
            <MenuList sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <box-icon
                type="logo"
                name="facebook"
                size="md"
                color="white"
                style={{
                  backgroundColor: "#ff724a",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              ></box-icon>
              <box-icon
                type="logo"
                name="twitter"
                size="md"
                color="white"
                style={{
                  backgroundColor: "#ff724a",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              ></box-icon>
              <box-icon
                name="instagram"
                type="logo"
                size="md"
                color="white"
                style={{
                  backgroundColor: "#ff724a",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              ></box-icon>
            </MenuList>
          </Box>
        </Box>
      </>
    );
  });
  return (
    <>
      <Stack
        width={"100%"}
        minHeight={"600px"}
        bgcolor={"#ff724a"}
        display={"flex"}
        paddingBottom={5}
      >
        <Typography
          textAlign={"center"}
          marginTop={5}
          variant="h2"
          fontWeight={"bold"}
          color="white"
        >
          تیم ما
        </Typography>
        <Typography textAlign={"center"} fontSize={"18px"} color="white">
          این یک نوشته است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان
          با بهره گیری از این نوشته تستی و نگارش متن می توانند تنها
          <br /> با یک کپی و پست این متن کپی میشود
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={4}
          marginTop={5}
        >
          {items}
        </Box>
      </Stack>
    </>
  );
}
