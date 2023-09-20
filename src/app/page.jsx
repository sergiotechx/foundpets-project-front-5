"use client";
import { Pagination } from "@mantine/core";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select } from "@mantine/core";
import "./home.scss";
import Carrusel from "@/components/carrusel/carrusel";
import CardFound from "@/components/cardFound/cardFound";
import { fullDataHomeBd, getBarrios } from "@/lib/pocketbase";
import { cities, species } from "@/lib/constants";

const Page = () => {
  const [barriospetsLost, setBarriosPetsLost] = useState(null);
  const [copybarriospetsLost, setCopyBarriosPetsLost] = useState([]);
  const [petsLost, setPetsLost] = useState(null);
  const [petsLostprops, setPetsLostprops] = useState(null);

  const [animal, setAnimal] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [formatedBarrio, setFormatedBarrio] = useState([]);

  const makeFormatedBarriosData = (barrios) => {
    let formatedBarrios = [];
    barrios.forEach((barrio) => {
      formatedBarrios.push({
        label: barrio.descripcion,
        value: barrio.id,
      });
    });
    return formatedBarrios;
  };
  const fetchData = async () => {
    try {
      const response = await fullDataHomeBd();
      const barrios = await getBarrios();
      let formatedBarrios = makeFormatedBarriosData(barrios);
      setPetsLost(response);
      setPetsLostprops(response);
      setBarriosPetsLost(barrios);
      setCopyBarriosPetsLost(barrios);
      //setFormatedBarrio(formatedBarrios);
      console.log(barrios);
      console.log("formatedBarrios", formatedBarrios);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("animales perdidos", petsLost?.records);
    const objetosFiltrados = petsLost?.records.filter(
      (objeto) => objeto.type === animal
    );
    const setdata = {
      records: objetosFiltrados,
      length: objetosFiltrados?.length,
    };
    console.log(setdata);
    setPetsLostprops(setdata);
  }, [animal]);

  useEffect(() => {
    console.log("animales perdidos", petsLost?.records);
    console.log("barrios", barriospetsLost);
    const barriosFiltrados = barriospetsLost?.filter(
      (objeto) => objeto.ciudad === ciudad
    );
    setCopyBarriosPetsLost(barriosFiltrados);
    let formatedBarriosFilter = makeFormatedBarriosData(copybarriospetsLost);
    setFormatedBarrio(formatedBarriosFilter);
    console.log(barriosFiltrados);
    const objetosFiltrados = petsLost?.records.filter(
      (objeto) => objeto.type === animal && objeto.ciudad === ciudad
    );
    const setdata = {
      records: objetosFiltrados,
      length: objetosFiltrados?.length,
    };
    console.log(setdata);
    setPetsLostprops(setdata);
  }, [ciudad]);

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
              value={animal}
              onChange={setAnimal}
              nothingFound={`No encontramos "${animal}" `}
              data={species}
            />
            <h3>Ubicación</h3>
            <h5>Ciudad</h5>
            <Select
              className="mb-4"
              placeholder="Ciudad"
              searchable
              value={ciudad}
              onChange={setCiudad}
              nothingFound={`No encontramos "${ciudad}" `}
              data={cities}
              disabled={!animal}
            />
            <h5>Barrio</h5>
            <Select
              className="mb-4"
              placeholder="Barrio"
              searchable
              value={barrio}
              onChange={setBarrio}
              disabled={!ciudad}
              nothingFound={`No encontramos "${barrio}" `}
              data={formatedBarrio}
            />
          </div>
          <div className="container__CardFound">
            <CardFound petsLostprops={petsLostprops} />
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
