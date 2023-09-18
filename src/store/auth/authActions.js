

import { loginWithGoogle } from "@/lib/providers";
import { addNewUser, chekingCredentials, loging, logout, updateUser } from "./authReducer";
import { createUser } from "../../lib/pocketbase";


export const checkingAuthetication = (email, password,) => {
    return async (dispatch) => {
      dispatch(chekingCredentials());
    };
  };

  export const startGoogleSignIn = () => {
    return async (dispatch) => {
      dispatch(chekingCredentials());
  
      try {
        const authData2 = await loginWithGoogle();
  
        dispatch(loging(authData2));
  
        
        // dispatch(addNewUser(authData2));
      } catch (error) {
        dispatch(logout(error.message));
      }
    };
  };


   export const startLoginWithGoogle = () => {
    return async (dispatch) => {
      dispatch(chekingCredentials());
  
      const result = await loginWithGoogle();

      console.log("resultado:",result);
  
      if (result.meta.id != null) {
        dispatch(
          loging(result)
          
        );
        return { ok: true };
      } else {
        alert("No hay usuario!")
        // dispatch(logout(result.errorMessage));
         return { ok: false };
      }
    };
  };
  
  
  
  
  
  
    export const startCreatingUserWithEmailPassword = (data) => {
    return async (dispatch) => {
      dispatch(chekingCredentials());
      
      try {
        const result = await createUser(data)
        console.log("prueba:", result);

      if (result.collectionId == "_pb_users_auth_") {
        dispatch(
          loging({
            ok: true,
            id: result.id,
            photoURL: result.photoURL,
            email: result.email,
            username: result.name,
            date: result.date,
            celphone: result.celphone,
          })
        );
        
      //   dispatch(
      //     addNewUser({
      //       ok: true,
      //       id: result.uid,
      //       photoURL: result.photoURL,
      //       email: result.email,
      //       username: result.username,
      //       celphone: result.celphone,
      //     })
      //   );
      }
      } catch (error) {
        console.log(error.message);
      }
      
    };
  };