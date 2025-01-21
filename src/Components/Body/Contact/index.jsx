import { Box, Button, Checkbox, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import 'boxicons'

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
        <Box sx={{display:'flex'}} marginTop={7} alignItems={'center'} justifyContent={'space-evenly'}>
            <Box borderRadius={'10px'} display={'flex'} color={'white'} flexDirection={'column'} justifyContent={'center'} paddingRight={4} gap={1} bgcolor={'#ff724a'} width={'360px'} height={'150px'}>
                <Box display={'flex'} alignItems={'center'} gap={1}>
                    <box-icon type='solid' name='phone' color='white'></box-icon>
                    <Typography fontSize={'20px'}>
                       تماس با ما
                    </Typography>
                </Box>
                <Typography>+001239875</Typography>
                <Typography>+064684664</Typography>
            </Box>
            <Box borderRadius={'10px'} display={'flex'} color={'white'} flexDirection={'column'} justifyContent={'center'} paddingRight={4} gap={1} bgcolor={'#ff724a'} width={'360px'} height={'150px'}>
                <Box display={'flex'} alignItems={'center'} gap={1}>
                    <box-icon type='solid' name='edit-location' color='white'></box-icon>
                    <Typography fontSize={'20px'}>
                        آدرس
                    </Typography>
                </Box>
                <Typography>تهران - خیابان ونک - بن بست محسنی</Typography>
                <Typography>مشهد - خیابان احمدآباد - ملاصدرا2</Typography>
            </Box>
            <Box borderRadius={'10px'} display={'flex'} color={'white'} flexDirection={'column'} justifyContent={'center'} paddingRight={4} gap={1} bgcolor={'#ff724a'} width={'360px'} height={'150px'}>
                <Box display={'flex'} alignItems={'center'} gap={1}>
                    <box-icon name='time-five' color='white'></box-icon>
                    <Typography fontSize={'20px'}>
                        ساعات کاری
                    </Typography>
                </Box>
                <Typography>شنبه تا چهارشنبه از 9 تا 19</Typography>
                <Typography>پنجشنبه و جمعه از 9 تا 16</Typography>
            </Box>
        </Box>
    </>
  )
}
