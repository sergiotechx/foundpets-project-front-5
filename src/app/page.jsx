"use client";
import { Pagination } from "@mantine/core";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select } from "@mantine/core";
import "./home.scss";
import Carrusel from "@/components/carrusel/carrusel";
import CardFound from "@/components/cardFound/cardFound";
import { fullDataHomeBd } from "@/lib/pocketbase";

const Page = () => {
  const [petsLost, setPetsLost] = useState(null);
  const [animal, setAnimal] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fullDataHomeBd();
        setPetsLost(response);
        console.log(response);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home p-3">
      <Carrusel />
      <div className="search">
        <h1 className="mb-5">Huellitas Perdidas</h1>
        <section className="search__section1">
          <div className="container__divSearch">
            <h3>Peludito</h3>
            <Select
              className="mb-4"
              placeholder="Peludito"
              searchable
              onSearchChange={setAnimal}
              searchValue={animal}
              nothingFound={`No encontramos "${animal}" `}
              data={["Perro", "Gato"]}
            />
            <h3>Ubicación</h3>
            <h5>Ciudad</h5>
            <Select
              className="mb-4"
              placeholder="Ciudad"
              searchable
              onSearchChange={setCiudad}
              searchValue={ciudad}
              nothingFound={`No encontramos "${ciudad}" `}
              data={["Medellin", "Bello", "Itagui", "Barbosa"]}
            />
            <h5>Barrio</h5>
            <Select
              className="mb-4"
              placeholder="Barrio"
              searchable
              onSearchChange={setBarrio}
              searchValue={barrio}
              nothingFound={`No encontramos "${barrio}" `}
              data={["Manrique", "Robledo", "picacho", "los colores"]}
            />
          </div>
          <div className="container__CardFound">
            <CardFound petsLost={petsLost} />
            <Pagination className="pt-5" total={10} color="lime" />
          </div>
        </section>
        <h2 className="pt-5">
          Algúnos reencuentros felices del mes de Septiembre
        </h2>
      </div>
      <Carrusel />
    </div>
  );
};

export default Page;
