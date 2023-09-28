'use client'

import React from "react";
import "./contactUS.scss";

const Page = () => {

  return (
    <main className="mainC">
      <article className="left">
        <h2>contactanos</h2>
        <hr />
        <p>
        En Found Pets, valoramos tus comentarios, preguntas y sugerencias. Nuestro equipo está siempre dispuesto a escuchar y ayudarte en todo lo que necesites. Ya sea que desees informarnos sobre una mascota perdida, obtener más información sobre nuestros servicios o simplemente saludarnos, estamos aquí para ti. No dudes en ponerte en contacto con nosotros a través de los métodos que te ofrecemos a continuación. Tu interacción es fundamental para seguir mejorando y brindando un servicio excepcional para el bienestar de las mascotas y sus dueños. ¡Esperamos con ansias escuchartez!
        </p>
      </article>
      <article className="right">
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
          <button>envia</button>
        </div>
      </article>
    </main>
  );
};

export default Page;
