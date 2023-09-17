import {  setData, deleteUser } from "./adminReducer";
import {getUsers} from '../../lib/pocketbase'



  export const getDataAction = () => {
    
    return async (dispatch) => {
     
  
      try {
      
        let result = await getUsers();

        //console.log('los datos son;',data)

        let  data = [];
        result.forEach((user)=>{data.push({id:user.id, name:user.name, date:user.updated })})
         console.log(data)
        dispatch(setData({users:data}));
  
        
      
      } catch (error) {
        alert (error.message)
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