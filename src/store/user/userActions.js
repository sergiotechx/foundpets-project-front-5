import { setData, clearData, updateUser,updatePet } from "./userReducer";
import { getUser, getPet, updateUserBd, createPetBd,updatePetBd } from '../../lib/pocketbase'
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
export const updateUserDataAction = (data) => {

    return async (dispatch) => {
        try {


            const updateRecord = await updateUserBd(data)

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
export const updatePetDataAction = (data) => {

    return async (dispatch) => {
        try {

            const petData = await getPet(data.owner)
            let updatedRecord = null;


            if (Object.entries(petData).length == 0) {

                updatedRecord = await createPetBd(data)
            }
            else {
               updatedRecord = await updatePetBd(petData.id,data)
            }
            if (Object.entries(updatedRecord).length > 0) {
                dispatch(updatePet({ pet:  updatedRecord }))
                const answer = await Swal.fire({

                    title: "Operación exitosa",
                    text: "Modificaciones relizadas",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#7FD161"
                })
            }

            /* const updateRecord = await updateUserBd(id, name, email, mobile,
                 address, ciudad, barrio, userImage, lost, publicAddress,
                 publicEmail, publicMobile, publicCiudad, publicBarrio)
 
             if (Object.entries(updateRecord).length > 0) {
                 dispatch(updateUser({ user: updateRecord }))
                 const answer = await Swal.fire({
 
                     title: "Operación exitosa",
                     text: "Modificaciones relizadas",
                     icon: "success",
                     confirmButtonText: "Aceptar",
                     confirmButtonColor: "#7FD161"
                 })
             }*/

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



