'use client'

import React from "react";
import "./contactUS.scss";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter()

  const handleClickR = () => {
    router.push('user/register')
  }
  const handleClickH = () => {
    router.push('/')
  }


  return (
    <main className="mainC">
      <article className="left">
        <figure>
          <img className="logoC1" src="/images/logo.png" alt="" />
          <img className="logoC2" src="/images/huellas3.png" alt="" />
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          accusantium sunt. Neque vel expedita nulla! Est, iusto illum ex
          cupiditate dolore veniam alias officia laudantium harum, a placeat
          dolores quasi? <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          nulla, at totam, repellendus illum dolorem qui, animi architecto
          cupiditate voluptatem praesentium fugiat vel expedita neque
          consectetur! Quo, itaque? Totam, laboriosam!
        </p>
      </article>
      <article className="right">
        <div className="btnTop">
          <button onClick={handleClickR}>Registrarse</button>
          <button onClick={handleClickH}>Inicio</button>
        </div>
        <div className="form">
        <div className="countC">
          <h3>Mis datos</h3>
          <div className="form-floating mb-3">
            <p>Nombre completo</p>
            <input type="name" placeholder="Brayan Areiza" />
          </div>
          <div className="form-floating mb-3 ">
            <p>Correo electronico</p>
            <input type="email" placeholder="name@example.com" />
          </div>
          <div className="form-floating mb-3">
            <p>Numero de telefono</p>
            <input type="number" placeholder="celphone" />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Que buscas?</option>
            <option value="1">Historias </option>
            <option value="2">Tienda de collares</option>
            <option value="3">Cobertura</option>
          </select>
        </div>
        <div>
          <figure className="figures">
            <img className="image1" src="images/perrito.jpg" alt="" />
            <img className="image2" src="images/gato.jpg" alt="" />
            <img className="image3" src="images/perrito2.jpg" alt="" />
          </figure>
        </div>
        </div>
        <div className="btnbotton">
          <button>Chatea con nosotros</button>
          <button>Te llamamos?</button>
        </div>
      </article>
    </main>
  );
};

export default Page;
