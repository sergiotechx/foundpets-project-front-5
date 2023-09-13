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
            <img src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229185/Foody/1_ppljk2.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229185/Foody/2_vcngbz.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229186/Foody/3_rwndxo.png" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="https://res.cloudinary.com/dtjp5b2qr/image/upload/v1693229186/Foody/4_lovkqv.png" />
          </Carousel.Slide>
        </Carousel>
      }
    </div>
  );
};

export default Carrusel;
