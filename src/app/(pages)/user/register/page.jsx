"use client";

import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import "./register.scss";
import { useRouter } from "next/navigation";
import { store } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreatingUserWithEmailPassword,
  startGoogleSignIn,
} from "@/store/auth/authActions";
import { chekingCredentials } from "../../../../store/auth/authReducer";

const formData = {
  email: "",
  password: "",
  name: "",
  celphone: "",
  photoURL: "",
};

const Page = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm(formData);
  const router = useRouter();

  const isLogin = useMemo(() => status === "authenticated", [status]);

  const handleClik = () => {
    router.push("login");
  };

  const onSubmit = handleSubmit((data) => {
    console.log("data:", data);

    dispatch(startCreatingUserWithEmailPassword(data));
    reset();
  });

  // const onClickNewUser = () => {
  //   // await dispatch(startCreatingUserWithEmailPassword());
  //   // dispatch(startNewUser(updatedCreateUser));
  //   // Swal.fire("Bien hecho", "Cuenta creada exitosamente", "success");
  //   // const currentState = store.getState().auth;
  // };
  const onGoogleLogin = () => {
    dispatch(chekingCredentials());
    dispatch(startGoogleSignIn());
  };
  if (isLogin) {
    router.push("/");
  }

  return (
    <div className="main">
      <div className="logoR">
        <figure className="imagesR">
          <img className="imagesR__f1r" src="/images/logo.png" alt="" />
          <img className="imagesR__f2r" src="/images/huellas3.png" alt="" />
        </figure>
      </div>
      <form onSubmit={onSubmit} className="count">
        <h3>Crear cuenta</h3>
        <div className="form-floating mb-3">
          <p>Nombre completo</p>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              minLength: {
                value: 4,
                message: "Nombre debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.nombre && <span>{errors.nombre.message} </span>}
        </div>
        <div className="form-floating mb-3">
          <p>Correo electronico</p>
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                message: "Correo no valido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message} </span>}
        </div>
        <div className="form-floating">
          <p>Contraseña</p>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña requerida",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && <span>{errors.password.message} </span>}
        </div>
        <button className="btn" type="submit" >
          Registrarse
        </button>
        {/* <div className="social" onClick={onGoogleLogin}>
          <figure>
            <img className="googleR" src="/images/google.png" alt="" />
          </figure>
        </div> */}
        <div className="redireccion">
          <p>¿Ya tienes cuenta?</p>
          <h6
            className="redireccion__link" onClick={handleClik}>
            Ingresar
          </h6>
        </div>
      </form>
      <div className="logo3R">
        <figure className="images">
          <img src="/images/huellas3.png" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Page;
