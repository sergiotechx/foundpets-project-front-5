'use client'

import React from "react";
import {useForm} from 'react-hook-form'
import "./register.scss";
import { useRouter } from "next/navigation";


const Page = () => {

  const { 
    register,
    handleSubmit, 
    formState:{errors},
    setValue,
    reset
   } = useForm()
  const router = useRouter();

  const handleClik = () => {
    router.push("login");
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    reset()
  })


  return (
    <div className="main">
      <div className="logoR">
        <figure className="imagesR">
          <img src="/images/logo.png" alt="" />
          <img src="/images/huellas3.png" alt="" />
        </figure>
      </div>
      <form  onSubmit={onSubmit} className="count">
        <h3>Crear cuenta</h3>
        <div className="form-floating mb-3">
          <p>Nombre completo</p>
          <input 
          type="text" 
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre requerido"
            },
            minLength: {
              value: 4,
              message: "Nombre debe tener al menos 4 caracteres"
            },
          })}
          />
          {
           errors.nombre && <span>{errors.nombre.message} </span> 
          }
        </div>
        <div className="form-floating mb-3">
          <p>Correo electronico</p>
          <input 
          type="email" 
          placeholder="nombre@ejemplo.com" 
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido"
            },
            pattern:{
              value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
              message: "Correo no valido"
            }
          })}
          />
          {
           errors.email && <span>{errors.email.message} </span> 
          }
        </div>
        <div className="form-floating">
          <p>Contraseña</p>
          <input 
          type="password" 
          {...register("password", {
            required:{
              value: true,
              message: "Contraseña requerida"
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          })}
          />
          {
           errors.password && <span>{errors.password.message} </span> 
          }
        </div>

        <div className="form-floating">
          <p>Avatar</p>
          <input 
          type="file" 
          onChange={(e) =>{
            console.log(e.target.files[0]);
            setValue('fotoAvatar',e.target.files[0].name)
          }}
          />
        </div>
        <button 
        className="btn" 
        type="submit">
          Registrarse
        </button>
        <div className="redireccion">
          <p >¿Ya tienes cuenta?</p>
          <span className="redireccion__link" onClick={handleClik}>
            Ingresar
          </span>
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
