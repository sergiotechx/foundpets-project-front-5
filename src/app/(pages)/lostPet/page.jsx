"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "@mantine/carousel";
import "./lostPest.scss";
import { useRouter } from "next/navigation";

const Page = () => {
  const onePetSlice = useSelector((store) => store.onePetSlice);
  const router = useRouter();

  console.log(onePetSlice);

  return (
    <div className="lostPest">
      <div>
        <h2>{onePetSlice.onePet.petName}</h2>
      </div>
    </div>
  );
};

export default Page;
