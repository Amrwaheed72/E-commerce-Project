import { Box, Button, Container , Link, Stack, Typography, useTheme,  } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css"
import IconSection from "./IconSection";

const myslider=[
    {text:"MEN" , link:"src/img/banner-15.jpg"},
    {text:"WOMEN" , link:"src/img/banner-25.jpg"},
]

const Hero= () =>{
    const theme = useTheme()
    return(
<Container>


<Box  sx={{ pt:2,mt:2.5 , display:"flex" , alignItems:"center", gap:2}}>
    <Swiper
            loop={true}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
    
    {myslider.map((item)=>{
        return(
            <SwiperSlide key={item.link} className="sliderimg1" > 
            <img src={item.link}></img>
            <Box sx={{ [theme.breakpoints.up('sm')]:{
                position:"absolute" ,left:"10%",textAlign:"left"},
                [theme.breakpoints.down('sm')]:{
                    pt:4,pb:6,}
            }
            }
        >
                <Typography sx={{
                    color:"#222"
                }} variant="h5">
                    LIFESTYLE COLLECTION
                </Typography>
                <Typography sx={{
                    color:"#222"
                }} variant="h3">
                    {item.text}
                </Typography>
    
                <Stack sx={{justifyContent:"center"}} direction={"row"} alignItems={"center"}>
                    <Typography sx={{color:"#333" , mr:1 }} variant="h4">
                        SALE UP TO  
                    </Typography>
                    <Typography sx={{color:"red" }} variant="h4">
                        30% OFF
                    </Typography>
                </Stack>
    
                <Typography sx={{
                    color:"#000",
                    fontWeight:300,
                    my:1
                }}
                variant="body1">
                    Get free shopping on orders over $99.00
                </Typography>
    
                <Button sx={{
                    px:5,
                    py:1,
                    mt:2,
                    backgroundColor:"#222",
                    color:"#fff",
                    borderRadius:"100px",
                    boxShadow:"0px 4px 16px rgp=(43,52,69,0.1)",
                    ":hover":{
                        backgroundColor:"#111111",
                        boxShadow:"0px 4px 16px rgp=(43,52,69,0.1)"
                    }
                }}
                >
                    Shop now
                </Button>
            </Box>
        </SwiperSlide>
        )
    })}
        </Swiper>
    
    <Box sx={{display:{xs:"none",md:"block" , minWidth:"26.6%"}}}>
        <Box position={"relative"}> 
            <img src="src\img\banner-17.jpg" width={"100%"}></img>
    
    <Stack sx={{ top:"50%",transform:"translateY(-50%)", left:31}} position={"absolute"}>
                    <Typography variant="caption" 
                    sx={{
                        color:"#283445",
                        fontSize:"16px"
                    }}>
                        NEW ARRIVALS
                    </Typography>
        
                    <Typography variant="h6" 
                    sx={{
                        color:"#283445",
                        fontSize:"18px",
                        mt:1,
                    }}>
                        SUMMER
                        <br></br>
                        SALE 20% OFF
                    </Typography>
    
                    <Link 
                    sx={{
                        color:"#283445",
                        display:"flex",
                        alignItems:"center",
                        gap:"5px",
                        fontSize:"14px",
                        transition:"0.2s",
                        "&:hover":{color:"red"}
                    }} href="#" underline="none">
    
                    shop now
                    <ArrowForwardIosIcon sx={{fontSize:"10px"}}/>
                    </Link>
    
    </Stack>
    </Box>
    
        <Box position={"relative"}> 
            <img src="src\img\banner-16.jpg" width={"100%"}></img>
    
            <Stack sx={{ top:"50%",transform:"translateY(-50%)", left:31}} position={"absolute"}>
                    <Typography variant="caption" 
                    sx={{
                        color:"#283445",
                        fontSize:"16px"
                    }}>
                        GAMING 4K
                    </Typography>
        
                    <Typography variant="h6" 
                    sx={{
                        color:"#283445",
                        fontSize:"18px",
                        mt:1,
                    }}>
                        DESKTOPS &
                        <br></br>
                        LAPTOPS
                    </Typography>
    
                    <Link 
                    sx={{
                        color:"#283445",
                        display:"flex",
                        alignItems:"center",
                        gap:"5px",
                        fontSize:"14px",
                        transition:"0.2s",
                        "&:hover":{color:"red"}
                    }} href="#" underline="none">
    
                    shop now
                    <ArrowForwardIosIcon sx={{fontSize:"10px"}}/>
                    </Link>
    
    </Stack>
    
        </Box>
    </Box>

</Box>

<IconSection/>

</Container>
    )
}
export default Hero;