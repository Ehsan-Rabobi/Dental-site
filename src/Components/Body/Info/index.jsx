import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Info() {
  return (
    <>
      <Stack
        marginTop={10}
        width={"100%"}
        minHeight={"420px"}
        bgcolor={"#f2f2f2"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        padding={'0 20px'}
        sx={{
          padding:{
            sm:"20px 10px"
          }
        }}
      >
        <Typography fontWeight={"bold"} sx={{
          fontSize: {
            xs:"2rem",
            sm: "2.5rem",
            md: "3.5rem",
          }
        }}>
          چرا ما را انتخاب کنید
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={"18px"}
          fontFamily={"fantasy"}
          color="#333333"
          lineHeight={2}
          sx={{
            padding:{
              xs:'0 20px',
              sm:'0'
            }
          }}
        >
          این یک نوشته است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان
          با بهره گیری از این نوشته تستی <br />
          نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما تستی می تواند سرعت
          پیشرفت پروژه را افزایش دهد، و طراحان به جای <br /> و نگارش متن می
          توانند تنها با یک کپی و پست این متن کپی میشود
        </Typography>
        <Box>
          <Button
            sx={{
              backgroundColor: "#ff724a",
              color: "white",
              fontSize: "18px",
              fontFamily: "fantasy",
              fontWeight: "bold",
              padding: "12px 45px",
              wordSpacing: 5,
            }}
          >
            ارتباط با ما
          </Button>
        </Box>
      </Stack>
    </>
  );
}
