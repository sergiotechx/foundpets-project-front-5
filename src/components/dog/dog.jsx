'use client'
import './dog.scss'
import React, { useEffect,useMemo } from 'react'
import Script from 'next/script'
import { loadScript } from './script'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  logoutAction,
  startLoginWithEmailPassword,
  startLoginWithGoogle,
} from "../../store/auth/authActions";
import { chekingCredentials, loging } from "../../store/auth/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store/store";
import { logout } from "@/lib/pocketbase";
import { clearUserDataAction } from "@/store/user/userActions";


const Dog = ({ close }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const isLogin = useMemo(() => status === "authenticated", [status]);
  const router = useRouter();
  
  const { register, reset, formState: { errors }, watch, handleSubmit, setValue, getValues } =
    useForm({
      defaultValues: {
        email: '',
        password:''
      }
    });

  const logout = () => {
    dispatch(clearUserDataAction());
    dispatch(logoutAction());
  };

  useEffect(() => {
    loadScript()
    logout();
  }, []);
  
  const onSubmit = handleSubmit((data) => {
    dispatch(startLoginWithEmailPassword(data));
    reset();
  });


  const handleGoogleLogin = () => {
    dispatch(chekingCredentials());
    dispatch(startLoginWithGoogle());
  };
  
  if (isLogin) {
   close();
  }


  return (
    <div className="centerC">
      <div className="center">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="face">
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
              <path d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z" fill="#243946"></path>
            </svg>
            <div className="glow"></div>
          </div>
          <div className="mouth">
            <svg className="smile" viewBox="-2 -2 84 23" width="84" height="23">
              <path d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161" fill="none" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3"></path>
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
          <div className="hand hand--left">
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
          <div className="hand hand--right">
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
            <div className="fa fa-user"></div>
            <input className="username" type="email" autoComplete="on" placeholder="Correo"  
            {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido",
                },
              })}/>
              {errors.email && <span>{errors.email.message} </span>}
          </label>
          <label>
            <div className="fa fa-commenting"></div>
            <input className="password" type="password" autoComplete="off" placeholder="Contraseña"
             {...register("password", {
              required: {
                value: true,
                message: "Contraseña Necesaria",
              },
            })}/>
            {errors.password && <span>{errors.password.message} </span>}
          
           
            <button className="password-button">Mostrar</button>
          </label>
          <button className="login-button">Acceder</button>
        </form>

        <div className="social-buttons">
          
          <div className="social">
           <img className="google" src="/images/google.png" alt="" onClick={handleGoogleLogin}/>
          </div>
          
        </div>
      
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.min.js' />

      </div>
    </div>
  )
}

export default Dog
