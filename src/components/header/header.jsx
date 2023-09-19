"use client";
import React, { useEffect, useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import "./header.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isLogin, setIsLogin] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const status = useSelector((store) => store.auth.status);
  console.log(status)
  useEffect(() => {
    if(status==='authentucated'){}
    setIsLogin(true)
  }, [])
  
  return (
    <div className="Header__primary">
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
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
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn1 "
            >
              Acceder
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn2"
            >
              Registro
            </motion.button>
          </section>
        )}
      </div>
      <motion.nav
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="navbar navbar-expand-md center"
      >
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
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link color"
                  href="#"
                >
                  Inicio
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link color"
                  href="#"
                >
                  Como funciona
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link color"
                  href="#"
                >
                  Acerca de nosotros
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link color"
                  href="#"
                >
                  Comunidad
                </motion.a>
              </li>
              {isLogin && (
                <li className="nav-item">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="nav-link color"
                    href="#"
                  >
                    Perfil
                  </motion.a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
