"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import "./carrusel.scss";

const Carrusel = () => {
  return (
    <div className="HomeC_RestaurantsLogo">
      {
        <Carousel
          slideSize="10%"
          align="start"
          slideGap="xs"
          controlsOffset="xs"
          loop
          dragFree
          withControls={false}
        >
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165068/Captura_de_pantalla_2023-09-19_180926_xrxinl.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175429_ctgyyw.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175202_ytmody.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175932_n2usbg.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175041_xuccsy.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175817_foqxyv.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165067/Captura_de_pantalla_2023-09-19_175513_lid95d.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165243/Captura_de_pantalla_2023-09-19_180359_yyomet.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165214/Captura_de_pantalla_2023-09-19_174951_igdeym.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165282/Captura_de_pantalla_2023-09-19_181007_oaoppn.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165542/Captura_de_pantalla_2023-09-19_181658_yhqnu6.png  " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695165542/Captura_de_pantalla_2023-09-19_181658_yhqnu6.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695174089/Captura_de_pantalla_2023-09-19_204009_jxolzq.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695174089/Captura_de_pantalla_2023-09-19_203502_bacnkd.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src=" https://res.cloudinary.com/dta4ynenw/image/upload/v1695174089/Captura_de_pantalla_2023-09-19_203616_bz9guy.png " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695174089/Captura_de_pantalla_2023-09-19_203548_ouwo9y.png  " />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dta4ynenw/image/upload/v1695174642/Captura_de_pantalla_2023-09-19_205055_t4qjan.png  " />
          </Carousel.Slide>
        </Carousel>
      }
    </div>
  );
};

export default Carrusel;
