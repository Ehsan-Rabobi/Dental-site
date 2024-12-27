import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import informationTeam from "../../../utils/Team";

export default function OurTeam() {
  const items = informationTeam?.map((e,index)=>{
    return(
      <>
        <Box>
          {console.log(e)}
        </Box>
      </>
    )
  })
  return (
    <>
      <Stack width={"100%"} height={"600px"} bgcolor={"#ff724a"} display={'flex'}>
        <Typography>تیم ما</Typography>
        <Typography>
          این یک نوشته است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان
          با بهره گیری از این نوشته تستی و نگارش متن می توانند تنها با یک کپی و
          پست این متن کپی میشود
        </Typography>
      </Stack>
    </>
  );
}
