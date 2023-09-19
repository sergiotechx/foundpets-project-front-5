"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select } from "@mantine/core";
import "./home.scss";
import Carrusel from "@/components/carrusel/carrusel";
import CardFound from "@/components/cardFound/cardFound";
import { filterDataHomeBd, fullDataHomeBd } from "@/lib/pocketbase";

const Page = () => {
  const [searchValue, onSearchChange] = useState("");
 const loadData = async ()=>{
  const temp =  await fullDataHomeBd()
  console.log(temp)
 }
   useEffect(() => {
    loadData();
   
    
   }, [])
   
  return (
    <div className="home p-3">
      <Carrusel />
      <div className="search">
        <h1 className="mb-5">Huellitas Perdidas</h1>
        <section className="search__section1">
          <div>
            <h3>Peludito</h3>
            <Select
              className="mb-4"
              placeholder="Peludito"
              searchable
              onSearchChange={onSearchChange}
              searchValue={searchValue}
              nothingFound="No options"
              data={["Perro", "Gato"]}
            />
            <h3>Ubicación</h3>
            <h5>Ciudad</h5>
            <Select
              className="mb-4"
              placeholder="Ciudad"
              searchable
              onSearchChange={onSearchChange}
              searchValue={searchValue}
              nothingFound="No options"
              data={["Medellin", "Bello", "Itagui", "Barbosa"]}
            />
            <h5>Barrio</h5>
            <div className="dropdown ">
              <button
                className="btn btn-secondary dropdown-toggle bg-light text-dark"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Action</button>
                </li>
                <li>
                  <button className="dropdown-item">Another action</button>
                </li>
                <li>
                  <button className="dropdown-item">Something else here</button>
                </li>
              </ul>
            </div>
          </div>
          <CardFound />
        </section>
      </div>
    </div>
  );
};

export default Page;
