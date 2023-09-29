"use client";
import { Pagination } from "@mantine/core";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select, Tooltip, Button } from "@mantine/core";
import "./home.scss";
import Carrusel from "@/components/carrusel/carrusel";
import CardFound from "@/components/cardFound/cardFound";
import { fullDataHomeBd, getBarrios } from "@/lib/pocketbase";
import { cities, imagenesFinalesFelices, species } from "@/lib/constants";
import "@/lib/bearLoader.scss";
import { imagesHome } from "@/lib/constants";

const Page = () => {
  const [barriospetsLost, setBarriosPetsLost] = useState(null);
  const [petsLost, setPetsLost] = useState(null);
  const [petsLostprops, setPetsLostprops] = useState({
    records: [],
    length: 0,
  });

  const [animal, setAnimal] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [formatedBarrio, setFormatedBarrio] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
      const response = await simulateDelayedFetch(fullDataHomeBd, 1000);
      const barrios = await getBarrios();
      //let formatedBarrios = makeFormatedBarriosData(barrios);
      setPetsLost(response);
      setPetsLostprops(response);
      setBarriosPetsLost(barrios);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  // Función para simular un retraso en la promesa
  const simulateDelayedFetch = (fetchFunction, delayMs) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const result = await fetchFunction();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delayMs);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setBarrio("");
    setCiudad("");
    if (animal) {
      const objetosFiltrados = petsLost?.records.filter(
        (objeto) => objeto.type === animal
      );
      const setdata = {
        records: objetosFiltrados,
        length: objetosFiltrados?.length,
      };
      console.log("gato o perro", setdata);
      setPetsLostprops(setdata);
    }
  }, [animal]);

  useEffect(() => {
    if (ciudad) {
      console.log("ciudad", ciudad);
      setBarrio("");
      const barriosFiltrados = barriospetsLost?.filter(
        (objeto) => objeto.ciudad === ciudad
      );
      //setCopyBarriosPetsLost(barriosFiltrados);

      let formatedBarriosFilter = makeFormatedBarriosData(barriosFiltrados);
      setFormatedBarrio(formatedBarriosFilter);
      //setCopyBarriosPetsLost(formatedBarriosFilter);
      //console.log("barrios actuales", formatedBarriosFilter);
      const objetosFiltrados = petsLost?.records.filter(
        (objeto) => objeto.type === animal && objeto.ciudad === ciudad
      );
      const setdata = {
        records: objetosFiltrados,
        length: objetosFiltrados?.length,
      };
      //console.log(setdata);
      setPetsLostprops(setdata);
    }
  }, [ciudad]);

  useEffect(() => {
    console.log(barrio);
    if (barrio) {
      const objetosFiltrados = petsLost?.records.filter(
        (objeto) =>
          objeto.type === animal &&
          objeto.ciudad === ciudad &&
          objeto.barrio === barrio
      );
      const setdata = {
        records: objetosFiltrados,
        length: objetosFiltrados?.length,
      };
      console.log("lo que hay en los barrios", setdata);
      setPetsLostprops(setdata);
    }
  }, [barrio]);

  const handlevaciar = () => {
    console.log("basura");
    setAnimal("");
    setBarrio("");
    setCiudad("");
    setPetsLostprops(petsLost);
  };

  // Calcular el total de páginas
  const totalPages = Math.ceil(petsLostprops?.length / itemsPerPage);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calcular los datos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = petsLostprops?.records.slice(startIndex, endIndex);

  return (
    <div className="home p-3">
      <Carrusel imagesHome={imagesHome} />
      <div className="search ">
        <h1 className="mb-5">Huellitas perdidas</h1>
        {!petsLost ? (
          <>
            <span className="loader"></span>
            <h3>Buscando animalitos...</h3>
          </>
        ) : (
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
              <button
                className="btn btn-outline-success"
                onClick={handlevaciar}
              >
                vaciar busqueda
              </button>
            </div>
            <div className="container__CardFound">
              <CardFound currentData={currentData} />
              <Pagination
                className="pt-5"
                color="lime"
                total={totalPages}
                value={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </section>
        )}
        <h2 className="pt-5">
          Algunos reencuentros felices del mes de septiembre
        </h2>
      </div>
      <Carrusel imagesHome={imagenesFinalesFelices} />
      <a href="https://wa.me/573508681733" target="_blank">
        <Tooltip label="Tienes dudas? Escríbenos." color="green">
          <Icon className="iconWhatsapp" icon="logos:whatsapp-icon" />
        </Tooltip>
      </a>
    </div>
  );
};

export default Page;
