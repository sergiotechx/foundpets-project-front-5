import { loginWithGoogle } from "@/lib/providers";
import { addNewUser, chekingCredentials, loging, logout, updateUser } from "./authReducer";


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
  
      if (isValid) {
        dispatch(
          loging({
            ok: true,
            id: result.meta.id,
            photoURL: result.meta.avatarURL,
            email: result.meta.email,
            displayName: result.meta.name,
          })
        );
        return { ok: true };
      } else {
        dispatch(logout(result.errorMessage));
        return { ok: false };
      }
    };
  };
  
  
  
  
  
  
  export const startCreatingUserWithEmailPassword = () => {
    return async (dispatch) => {
      dispatch(chekingCredentials());
  
      if (!result.ok) return dispatch(logout(result.errorMessage));
  
      if (result.ok) {
        dispatch(
          loging({
            ok: true,
            uid: result.uid,
            photoURL: result.photoURL,
            email: result.email,
            username: result.username,
            date: result.date,
            celphone: result.celphone,
          })
        );
        
        dispatch(
          addNewUser({
            ok: true,
            id: result.uid,
            photoURL: result.photoURL,
            email: result.email,
            username: result.username,
            celphone: result.celphone,
          })
        );
      }
    };
  };