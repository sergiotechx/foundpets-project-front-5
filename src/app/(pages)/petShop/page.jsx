'use client'
import React from 'react'
import "./style.scss"
import Footer from '@/components/footer/footer'
const page = () => {
  //mafervega
    
  return (
    <div>

    
    <div className='store'>
    <div className='store2'>
    <img src="/images/collar.jpg"/> 
    <button>Agregar</button>
    </div>

    <div className='store2'>
    <img src="/images/collar.jpg"/> 
    <button>Agregar</button>

    </div>

    <div className='store2'>
    <img src="/images/collar.jpg"/> 
    <button>Agregar</button>

    </div>

    <div className='store2'>
       <img src="/images/collar.jpg"/> 
       <div>
        <label htmlFor="">
          precio
        </label>
      </div>
       <button>Agregar</button>

       
       

    </div>

    <div className='store2'>
        <img src="/images/collar.jpg"/> 
        <button>Agregar</button>

    </div>
    <div className='store1'>
    <label htmlFor="">  Mas detalles </label> 
    </div>
 
    </div>
    <Footer/> 
    </div>
    
  )
}

export default page
