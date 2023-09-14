import React from 'react'
import './style.scss'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
const Page = () => {
  return (
    <div>
    <Header/>
    <div className="container">
      <h2>Acerca de Nosotros</h2>
      <p>
        Found Pets es una empresa dedicada a ayudar a encontrar mascotas
        perdidas mediante el uso de QR en los collares de nuestras mascotas.
      <br />
        Nuestra misión es reunir a las mascotas perdidas con sus dueños lo más
        rápido posible.
      <br />
      Únete a nosotros en esta aventura para mantener a las mascotas seguras.</p>
    </div>
    <Footer/>
  </div>
  )
}

export default Page


