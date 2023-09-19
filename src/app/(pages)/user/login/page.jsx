"use client";

import React, { useEffect, useMemo, useState } from "react";
import "./login.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { startLoginWithEmailPassword, startLoginWithGoogle } from "../../../../store/auth/authActions";
import { chekingCredentials, loging } from "../../../../store/auth/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store/store";
import { logout } from "@/lib/pocketbase";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [handsVisible, setHandsVisible] = useState(true);
  const [peekActive, setPeekActive] = useState(false);
  const [rotateHead, setRotateHead] = useState(0);
  const { status } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    reset,
  } = useForm();

  useEffect(() => {
    logout();
    // alert("Operacion realizada")
  }, []);


  const dispatch = useDispatch();
  const isLogin = useMemo(() => status === "authenticated", [status]);

  const handleUsernameChange = (value) => {
    const length = Math.min(value.length - 16, 19);
    setHandsVisible(true);
    if (value === "") {
      setRotateHead(0);
    } else {
      setRotateHead(-length);
    }
  };

  const router = useRouter();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);

    setHandsVisible(false);
  };
  const handlePasswordInputClick = () => {
    setRotateHead(0);
  };

  

  const handleClik = () => {
    router.push("register");
  };

  // const handleLogin = (data) => {
    

  // };
  const onSubmit = handleSubmit((data) => {
    const data2 = data
    console.log("data2:",data2);
    dispatch(startLoginWithEmailPassword(data2));
    reset();
  });
  const handleGoogleLogin = () => {
    dispatch(chekingCredentials());
    dispatch(startLoginWithGoogle());
  };
  if (isLogin) {
    router.push("/");
  }

  return (
    <div className="main">
      <div className="logo">
        <figure className="images">
          <img className="images__f1" src="/images/logo.png" alt="" />
          <img className="images__f2" src="/images/huellas3.png" alt="" />
        </figure>
      </div>
      <div className="center">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div
          className={`face ${username ? "turn" : ""}`}
          style={{ transform: `rotate(${rotateHead}deg)` }}
        >
          <div className="eyes">
            <div className="eye eye--left">
              <div className="glow"></div>
            </div>
            <div className="eye eye--right">
              <div className="glow"></div>
            </div>
          </div>
          <div className="nose">
            <svg width="38.161" height="22.03">
              <path
                d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
                fill="#243946"
              ></path>
            </svg>
            <div className="glow"></div>
          </div>
          <div className="mouth">
            <svg className="smile" viewBox="-2 -2 84 23" width="84" height="23">
              <path
                d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161"
                fill="none"
                strokeWidth="3"
                strokeLinecap="square"
                strokeMiterlimit="3"
              ></path>
            </svg>
            <div className="mouth-hole"></div>
            <div className="tongue breath">
              <div className="tongue-top"></div>
              <div className="line"></div>
              <div className="median"></div>
            </div>
          </div>
        </div>
        <div className="hands">
          <div className={`hand hand--left ${!handsVisible ? "hide" : ""} `}>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
          </div>
          <div className={`hand hand--right ${!handsVisible ? "hide" : ""}`}>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="login">
          <label>
            <div className="fa fa-phone"></div>
            <input
              className="username"
              type="email"
              autoComplete="on"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido",
                },
              })}
              onChange={(e) => {
                const value = e.target.value;
                setUsername(value);
                handleUsernameChange(value);
              }}
            />
            {errors.username && <span>{errors.username.message} </span>}
          </label>
          <label>
            <div className="fa fa-commenting"></div>
            <input
              className="password"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              placeholder="Contraseña"
              onChange={handlePasswordChange}
              onFocus={() => setHandsVisible(false)}
              onBlur={() => setHandsVisible(true)}
              onClick={handlePasswordInputClick}
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña Necesaria",
                },
              })}
            />
            {errors.password && <span>{errors.password.message} </span>}
            <button className="password-button" onClick={toggleShowPassword}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </label>
          <button type="submit" className="login-button" >
            Iniciar sesión
          </button>
        </form>
        <div className="textLink">inicia sesion con</div>
        <div className="social-buttons">
          <figure onClick={handleGoogleLogin}>
            <img className="google" src="/images/google.png" alt="" />
          </figure>
          {/* <i className="bi bi-google"></i> */}
        </div>
        <div className="redireccionL">
          <p>Si no tienes cuenta!</p>
          <span className="redireccion__link" onClick={handleClik}>
            Registrate
          </span>
        </div>
      </div>
      <div className="logo3">
        <figure className="images">
          <img src="/images/huellas3.png" alt="" />
        </figure>
      </div>
    </div>
  );
};
//

export default Page;
