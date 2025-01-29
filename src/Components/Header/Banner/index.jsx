import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";

export default function Banner() {
  return (
    <>
      <Stack
        width={"100%"}
        minHeight={"177px"}
        display={"flex"}
        flexDirection={"row"}
        marginTop={2}
        sx={{
          flexWrap: {
            xs: "wrap",
            sm: "nowrap",
          },
        }}
        justifyContent={"space-between"}
      >
        <Box
          width={"750px"}
          display={"flex"}
          alignItems={"center"}
          sx={{
            height: {
              xs: "380px",
              sm: "640px",
            },
          }}
        >
          <img className={style.img} src={"assets/image/picHead.jpg"} alt="" />
        </Box>
        <Box
          width={"570px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={5}
          sx={{
            height: {
              xs: "380px",
              sm: "640px",
            },
          }}
        >
          <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
            با دندانپزشکان <br />
            ما آشنا شوید :)
          </Typography>
          <Button
            sx={{
              border: "2px solid #ff724a",
              color: "#ff724a",
              padding: "9px 40px",
              fontSize: "21px",
              fontWeight: "bold",
            }}
          >
            بیشتر بدانید
          </Button>
        </Box>
      </Stack>
    </>
  );
}
