import { Box, Button, Checkbox, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <>
        <Stack width={'100%'} height={'550px'} marginTop={6} justifyContent={'space-between'} display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Box textAlign={'start'}  width={'50%'} height={'95%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={3}>
                <Box width={'80%'}>
                    <Typography variant='h3' fontWeight={'bold'}>ارتباط با ما</Typography>
                </Box>
                <FormGroup sx={{ width:"80%" , display:'flex' , gap:"8px"}}>
                    <label>
                        <Typography fontSize={'22px'} color='#1f1f1f'>نام و نام خانوادگی</Typography>
                        <TextField required color='none' fullWidth placeholder='نام و نام خانوادگی خود را وارد کنید' sx={{border:'none' , backgroundColor:"transparent" }}/>
                    </label>
                    <label>
                        <Typography fontSize={'22px'} color='#1f1f1f'>شماره همراه</Typography>
                        <TextField required color='none'  fullWidth placeholder='شماره همراه خود را وارد کنید' sx={{border:'none' , backgroundColor:"transparent" }}/>
                    </label>
                    <label>
                        
                        <Typography fontSize={'22px'} color='#1f1f1f'>توضیحات</Typography>
                        <TextField color='none' id="outlined-multiline-static" fullWidth multiline rows={4} placeholder="توضیحات"/>                   
                    </label>
                    <label style={{display:"flex" , alignItems:'center'}}>
                        <Checkbox required></Checkbox>
                        <Typography fontSize={'18px'} color='#1f1f1f'>من شرایط خدمات را میپذیرم</Typography>
                    </label>
                    <Button type='submit' fullWidth sx={{backgroundColor:'#ff724a' , color:"white" , fontSize:"22px" , marginTop:"8px"}}>ثبت</Button>
                </FormGroup>
            </Box>
            <Box width={'50%'} height={'98%'}>
                <img src={"assets/image/contactPic.png"} alt="" style={{width:'87%', float:'left' , height:"100%" , objectFit:"cover" , borderRadius:"0 43% 43% 0"}}/>
            </Box>
        </Stack>
        
    </>
  )
}
