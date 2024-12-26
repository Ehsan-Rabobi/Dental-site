import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import imageBanner from "../../../assets/image/picHead.jpg";

export default function Banner() {
  return (
    <>
      <Stack
        width={"100%"}
        height={"537px"}
        display={"flex"}
        flexDirection={"row"}
        marginTop={3}
      >
        <Box
          width={"40%"}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={5}
        >
          <Typography variant="h3" fontWeight={"bold"} textAlign={'center'}>
            با دندانپزشکان <br />
            (: ما آشنا شوید
          </Typography>
          <Button
            sx={{
              border: "2px solid #ff4800",
              color: "#ff4800",
              padding: "9px 40px",
              fontSize: "21px",
              fontWeight:'bold'
            }}
          >
            بیشتر بدانید
          </Button>
        </Box>
        <Box
          width={"60%"}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <img
            src={imageBanner}
            alt=""
            style={{
              width: "650px",
              height: "600px",
              objectFit: "cover",
              borderRadius: "50% 0px 0px 50%",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}
