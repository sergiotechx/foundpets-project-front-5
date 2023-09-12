"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carrusel.scss";

const Carrusel = () => {
  return (
    <div className="carrusel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 0,
          modifier: 0,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="swiper_container"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            className="img"
            src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229185/Foody/1_ppljk2.png"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229185/Foody/2_vcngbz.png"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229186/Foody/3_rwndxo.png"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229186/Foody/4_lovkqv.png"
            alt="slide_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
