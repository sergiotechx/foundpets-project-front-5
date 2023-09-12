import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import Carrusel from "@/components/carrusel/carrusel";

const Page = () => {
  return (
    <div className="happyEndings">
      <section className="happyEndings__section1">
        <button type="button" className="btn btn1 ">
          Acceder
        </button>
        <button type="button" className="btn btn2">
          Registro
        </button>
      </section>
      <img className="happyEndings__imgLog" src="images/logo.png" alt="" />
      <Carrusel />
    </div>
  );
};

export default Page;
