import { setData, deleteUser } from "./userReducer";
import { getUser, getPet  } from '../../lib/pocketbase'



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
    address, userImage, lost, publicAddress,
    publicEmail, publicMobile) => {

    return async (dispatch) => {
        try {
           
           console.log('uhhhh ahhh uhhh',id, name, email, mobile,
            address, userImage, lost, publicAddress,
            publicEmail, publicMobile)
          // const updateRecord = updateUserBd()
            // dispatch(clearData())
        }
        catch (error) {
            console.log(error)
            throw (error.message)
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



