import { loginWithGoogle } from "@/lib/providers";
import {
  addNewUser,
  chekingCredentials,
  loging,
  logout,
  updateUser,
} from "./authReducer";
import { authWithEmail, createUser, logoutPb, updateUserBd } from "../../lib/pocketbase";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


export const checkingAuthetication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};





export const startLoginWithGoogle = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = await loginWithGoogle();

    if (result.meta.id != null) {
      let record = result.record;
      let token = result.token;
      if (record.userImage == '') {
        record.userImage = result.meta.avatarUrl
      }
      if(record.qr == ''){
        record.qr = uuidv4()
        record = await updateUserBd(record)
      }
      dispatch(loging({ record, token }));
    }
    else {
      alert("No estás registrado. Por favor, regístrate primero.");
      dispatch(logout(result.errorMessage));
      return { ok: false };
    }
  };
};

/*export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    try {
      let authData2 = await loginWithGoogle();
      
      dispatch(loging(authData2));
    }
    catch (error) {
      dispatch(logout(error.message));
    }
  };
};*/

export const startCreatingUserWithEmailPassword = (data) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    try {
      const result = await createUser(data);
      console.log("prueba:", result);

      if (result.id) {
        const answer = await Swal.fire({

          title: "Operación exitosa",
          text: "Usuario creado",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#7FD161"
        })
        let data = { record: result }
        dispatch(loging(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const startLoginWithEmailPassword = (data2) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    try {

      let validation = await authWithEmail(data2);

      if (validation.record.id != null) {
        let record = validation.record;
        let token = validation.token;
        if (record.qr == '') {
          record.qr = uuidv4()
          record = await updateUserBd(record)
        }
        dispatch(loging({ record, token }))
      }
    }
    catch (error) {

      
        Swal.fire({
          title: 'Falla de validación',
          text: 'Credenciales incorrectas',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        })
        dispatch(logout())
     
    }

  }
}
export const logoutAction = () => {
  return async (dispatch) => {
    logoutPb()
    dispatch(logout());
  };
};