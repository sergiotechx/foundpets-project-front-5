import { loginWithGoogle } from "@/lib/providers";
import {
  addNewUser,
  chekingCredentials,
  loging,
  logout,
  updateUser,
} from "./authReducer";
import { authWithEmail, createUser } from "../../lib/pocketbase";
import { modals } from "@mantine/modals";
import { Button } from "@mantine/core";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const checkingAuthetication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

 

export const startLoginWithGoogle = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = await loginWithGoogle();

    console.log("resultado:", result);

    if (result.meta.isNew = false ) {
      dispatch(loging(result));
      // Redirige al usuario a la página de inicio
       router.push("/");
    } else {
      alert("No estás registrado. Por favor, regístrate primero.");
      dispatch(logout(result.errorMessage));
      return { ok: false };
    }
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

export const startCreatingUserWithEmailPassword = (data) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    try {
      const result = await createUser(data);
      console.log("prueba:", result);

      if (result && result.id) {
        <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Genial',
          innerProps: {
            modalBody:
              'Has creado tu cuenta exitosamente',
          },
        })
      }
    >
      OK!
    </Button>

    // Swal.fire(
    //   'Genila!',
    //   'Cuenta creada Exitosamente!',
    //   'success'
    // )
        dispatch(
          loging(result)
        );
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
      const valitation = await authWithEmail(data2);
      console.log("valitation:", valitation);
      if(valitation === true){
        dispatch(loging(valitation))
        router.push("/");
      }
    } catch (error) {
      
    }

}
}