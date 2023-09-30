"use client";
import "./header.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { Avatar, Menu, Text, rem, Modal, Button, Group } from "@mantine/core";
import { IconSettings, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { logoutAction } from "@/store/auth/authActions";
import Link from "next/link";
import { clearUserDataAction } from "@/store/user/userActions";
import { useDisclosure } from "@mantine/hooks";
import Dog from "../dog/dog";
import Register from "../register/register";


const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isLogin, setIsLogin] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showTitleModal,setShowTitleModal] =useState('');
  const auth = useSelector((store) => store.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [opened, { open, close }] = useDisclosure();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
    setShowTitleModal('Inicio de sesión')
    open();
  }
  

  const openRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
    setShowTitleModal('Registro de usuario')
    open();
  };
  

  useEffect(() => {
    if (auth.status === "authenticated") {
      setIsLogin(true);
      
    } else {
      setIsLogin(false);
    }
  }, [auth.status]);



  useEffect(() => {}, [isLogin]);
 
 

  const goProfile = () => {
    router.push("/user/profile");
  };

  const logout = () => {
    dispatch(clearUserDataAction());
    dispatch(logoutAction());
    setIsLogin(false);
    router.push("/");
  };

  const goAdmin = () => {
    router.push("/admin");
  };


  return (
    <div className="Header__primary">
      <Modal
        size="xs"
        opened={opened}
        onClose={close}
        title={showTitleModal}
        centered
      >
        {showLoginModal ? <Dog  close={close} />: null }
        {showRegisterModal ? <Register close={close} /> : null}
      </Modal>
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      <div className="HeaderC">
        <img src="/images/logo.png" />
        {isLogin ? (
          <div className="Options">
            <h5>Bienvenido: </h5>
            <span id="name">{auth.user.record?.name}</span>
            {!isLogin ? (
              <i className="bi bi-person-circle fs-3"></i>
            ) : (
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  {auth.user.record?.userImage ? (
                    <img src={auth.user.record?.userImage} />
                  ) : (
                    <i className="bi bi-person-circle fs-3"></i>
                  )}
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    rightSection={
                      <IconUserCircle
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                    onClick={() => goProfile()}
                  >
                    Perfil
                  </Menu.Item>
                  <Menu.Item
                    rightSection={
                      <IconLogout style={{ width: rem(14), height: rem(14) }} />
                    }
                    onClick={() => logout()}
                  >
                    Salir
                  </Menu.Item>

                  {auth.user.record?.role == 2 && (
                    <>
                      <Menu.Label>Sistema administrativo</Menu.Label>
                      <Menu.Item
                        rightSection={
                          <IconSettings
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                        onClick={() => goAdmin()}
                      >
                        Usuarios
                      </Menu.Item>
                    </>
                  )}
                </Menu.Dropdown>
              </Menu>
            )}
          </div>
        ) : (
          <section className="Options">
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn1 "
              onClick={openLoginModal}
            >
              Acceder
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              className="btn btn2"
              onClick={openRegisterModal}
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li
                  className="nav-item"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="nav-link colorMia"
                  >
                    Inicio
                  </motion.div>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    router.push("/help");
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="nav-link colorMia"
                  >
                    Como funciona
                  </motion.div>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    router.push("/aboutUS");
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="nav-link colorMia"
                  >
                    Acerca de nosotros
                  </motion.div>
                </li>
                <li className="nav-item">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="nav-link colorMia"
                  >
                    <Link
                      id="forum"
                      href="https://foundpets.freeforums.net/"
                      target="_blank"
                    >
                      Comunidad
                    </Link>
                  </motion.div>
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
