"use client";
import "./header.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { Avatar, Menu, Button, Text, rem } from '@mantine/core';
import { IconSettings, IconLogout, IconUserCircle } from '@tabler/icons-react';
import { logoutAction } from "@/store/auth/authActions";
import Link from 'next/link'
import { clearUserDataAction } from "@/store/user/userActions";


const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isLogin, setIsLogin] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const auth = useSelector((store) => store.auth);

  const goLogin = () => {
    router.push("/user/login");
  }
  const goRegister = () => {
    router.push("/user/register");
  }


  useEffect(() => {
    if (auth.status === "authenticated") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {

  }, [isLogin]);

  const goProfile = () => {
    router.push("/user/profile");
  }
  const logout = () => {
    dispatch(clearUserDataAction())
    dispatch(logoutAction())
    setIsLogin(false);
    router.push("/");
  }
  const goAdmin = () => {
    router.push("/admin");
  }

  return (
    <div className="Header__primary">
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      <div className="HeaderC">
        <img src="/images/logo.png" />
        {isLogin ? (
          <div className="Options">
            <h5>Bienvenido: </h5>
            
            <span id='name'>{auth.user.record?.name}</span>

            {!isLogin ? <i className="bi bi-person-circle fs-3"></i> :
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  {auth.user.record?.userImage?
                  <img src={auth.user.record?.userImage} />:
                  <i className="bi bi-person-circle fs-3"></i>
                  }
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item rightSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}
                    onClick={() => goProfile()}
                  >
                    Perfil
                  </Menu.Item >
                  <Menu.Item rightSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                    onClick={() => logout()}>
                    Salir
                  </Menu.Item>
                  
                  {auth.user.record?.role == 2 &&
                    <>
                      <Menu.Label>Sistema administrativo</Menu.Label>
                      <Menu.Item rightSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
                        onClick={() => goAdmin()}  >
                        Usuarios
                      </Menu.Item >
                    </>
                  }
                </Menu.Dropdown>
              </Menu>
            }

          </div>
        ) : (
          <section className="Options">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn1 "
              onClick={goLogin}
            >
              Acceder
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn2"
              onClick={goRegister}
            >
              Registro
            </motion.button>
          </section>
        )}
      </div>
      <div className="div">
      <motion.nav
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="navbar navbar-expand-md "
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
              <li className="nav-item" onClick={() => { router.push("/") }}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link colorMia"
                  href="#"
                >
                  Inicio
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link colorMia"
                  href="#"
                >
                  Como funciona
                </motion.a>
              </li>
              <li className="nav-item" onClick={() => { router.push("/aboutUS") }}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link colorMia"
                  href="#"
                >
                  Acerca de nosotros
                </motion.a>
              </li>
              <li className="nav-item" >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="nav-link colorMia"
                  href="#"
                >

                  <Link id='forum'  href="https://foundpets.freeforums.net/" target="_blank">
                    Comunidad
                  </Link>


                </motion.a>
              </li>

            </ul>
          </div>
        </div>
      </motion.nav>
      </div>
     
    </div>
  );
};

export default Header;
