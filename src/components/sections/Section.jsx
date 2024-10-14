import { Container, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Section.css'
// import required modules
import { Pagination } from 'swiper/modules';

const Section = () => {
    return (
        <Container sx={{ mt: 1, pt: 3, display: "flex", alignItems: "center" }}>


            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKyZy69GMkQeHi95mb44gblJeHNKujG-s6Q&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2, mt: 1 }}> kids </Typography> </p>
                </SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOjIH4CFZwH95gjBGhz80KmvZrsks3OJTsA&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Men </Typography> </p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHHBdMncv5dB2VHDfKvR4KwOJ4qXkhC68Bg&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Women </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGd64suWg7FlHc74w8K0EX0C0XCCgKDNnsmw&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Electronics </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAsmLPwPuGNOPyXsDxdMQhTobQ-UVW9PoXg&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Glasses </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLquGEtU3qScVJihALdN_QUEIrfL3azHPEg&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Bags  </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFX8BBM6kAGz_7vazA9Bu3qd2Akb_XQjDiQ&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Shoes </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpETUDbPZl-yzOPU4ZA6t2sNHIR9y1TZys9Q&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Watch </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhOldNtq4sTJgyaGrasAILvpTSlvd-STOYRenbhwq0akY0JSKXuoiRyDgfz43rdlj-f4&usqp=CAU" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> MakeUp </Typography></p></SwiperSlide>
                <SwiperSlide className="sectionimg"><p><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIllZWaIqBC7dsPRFl_WX5Q3FMUFRpkRADw&s" />
                    <Typography sx={{ fontSize: "16px", mb: 2 }}> Toys </Typography></p></SwiperSlide>

            </Swiper>


        </Container>
    )
}
export default Section;