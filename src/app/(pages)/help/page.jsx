import React from 'react'
import "./help.scss"

const Page = () => {
  return (
    <section className="como-funciona">
    <div className="container">
      <h2 className="como-funciona-title">¿Cómo funciona Found Pets?</h2>
      <div className="como-funciona-steps">
        <div className="como-funciona-step">
          <h3>Paso 1</h3>
          <p>Regístrate en Found Pets para empezar.</p>
          <img className="paso" src="/images/registro.png" alt="Paso 1" />
        </div>
        <div className="como-funciona-step">
          <h3>Paso 2</h3>
          <p>Publica información sobre tu usuario y tu mascota perdida.</p>
          <img className="paso"src="/images/usuario.png" alt="Paso 2" />
          <img className="paso"src="/images/usuariom.png" alt="Paso 2" />
        </div>
        <div className="como-funciona-step">
          <h3>Paso 3</h3>
          <p>Conecta con otros amantes de las mascotas y ayuda a reunirlas.</p>
          <img className="paso" src="/images/busqueda.png" alt="Paso 3" />
        </div>
      </div>
    </div>
  </section>
);
}

export default Page