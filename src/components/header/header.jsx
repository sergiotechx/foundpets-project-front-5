import React from 'react'
import './header.scss'
const Header = () => {
    return (
        <div className='HeaderC'>
            <img src='/images/logo.png' />
            <div className='Options'>
             <h5>Bienvenido: </h5>
             <span>Firulais</span>
             <i className="bi bi-house-door-fill fs-3"></i>
             <i className="bi bi-person-circle fs-3"></i>
            </div>
        </div>
    )
}

export default Header