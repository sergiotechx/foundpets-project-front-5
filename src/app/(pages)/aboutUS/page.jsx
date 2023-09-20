import React from 'react'
import './style.scss'
const Page = () => {
  return (
    <div className='acerca'>
    <img src="/images/huellasL.png" className='imagen'  alt="" />
    <div className='huellas'> 
    <img src="/images/huellas3.png" className='huellas3' alt="" />
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
    <img src="/images/huellas3.png" className='huellas3' alt="" />

    </div>
  
    <img src="/images/huellasL.png" className='imagen' alt="" />
    

  </div>
  )
}

export default Page


