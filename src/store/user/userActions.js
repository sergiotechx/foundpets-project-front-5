import { setData, clearData, updateUser } from "./userReducer";
import { getUser, getPet, updateUserBd } from '../../lib/pocketbase'
import Swal from 'sweetalert2'



export const getUserDataAction = (id) => {

    return async (dispatch) => {
        try {

            const userData = await getUser(id);
            let petData = {}
            if (Object.entries(userData).length > 0) {
                petData = await getPet(id);
            }

            dispatch(setData({ user: userData, pet: petData }))

        }
        catch (error) {
            console.log(error)
            throw (error.message)
        }
    };
};
export const updateUserDataAction = (id, name, email, mobile,
    address, ciudad, barrio, userImage, lost, publicAddress,
    publicEmail, publicMobile, publicCiudad, publicBarrio) => {

    return async (dispatch) => {
        try {


            const updateRecord = await updateUserBd(id, name, email, mobile,
                address, ciudad, barrio, userImage, lost, publicAddress,
                publicEmail, publicMobile,publicCiudad, publicBarrio)

            if (Object.entries(updateRecord).length > 0) {
                dispatch(updateUser({ user: updateRecord }))
                const answer = await Swal.fire({

                    title: "Operación exitosa",
                    text: "Modificaciones relizadas",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#7FD161"
                })
            }

        }
        catch (error) {
            const answer = await Swal.fire({

                title: "Error de sistema",
                text: error.message,
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#7FD161"
            })
        }
    };
};
export const clearUserDataAction = () => {

    return async (dispatch) => {
        try {
            dispatch(clearData())
        }
        catch (error) {
            console.log(error)
            throw (error.message)
        }
    };
};



