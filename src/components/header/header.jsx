"use client";
import React, { useEffect, useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import "./header.scss";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const status = useSelector((store) => store.auth.status);
  console.log(status)
  useEffect(() => {
    if(status==='authentucated'){}
    setIsLogin(true)
  }, [])
  
  return (
    <div className="Header__primary">
      <div className="HeaderC">
        <img src="/images/logo.png" />
        {isLogin ? (
          <div className="Options">
            <h5>Bienvenido: </h5>
            <span>Firulais</span>
            <i className="bi bi-house-door-fill fs-3"></i>
            <i className="bi bi-person-circle fs-3"></i>
          </div>
        ) : (
          <section className="Options">
            <button type="button" className="btn btn1 ">
              Acceder
            </button>
            <button type="button" className="btn btn2">
              Registro
            </button>
          </section>
        )}
      </div>
      <nav className="navbar navbar-expand-md center">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link color" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color" href="#">
                  Como funciona
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link color" href="#">
                  Registro
                </a>
              </li>
          
              <li className="nav-item">
                <a className="nav-link color" href="#">
                  Acerca de nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color" href="#">
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
