"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import "./carrusel.scss";

const Carrusel = ({ imagesHome }) => {
  return (
    <div className="HomeC_RestaurantsLogo mt-4 mb-3">
      {
        <Carousel
          slideSize="10%"
          align="start"
          slideGap="xs"
          controlsOffset="xs"
          loop
          dragFree
          withControls={true}
        >
          {imagesHome?.map((img, index) => (
            <Carousel.Slide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </Carousel.Slide>
          ))}
        </Carousel>
      }
    </div>
  );
};

export default Carrusel;
