'use client'
import { setData, deleteUser } from "./adminReducer";
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://foundpets.pockethost.io');
import { getUsers,deleteUserBd } from '../../lib/pocketbase'



export const getDataAction = () => {
  
  return async (dispatch) => {
    try {
      let result = await getUsers();
      let data = [];
      result.forEach((user) => { const date = new Date(user.updated); data.push({ id: user.id, name: user.name, date: date.toLocaleString() }) })
      dispatch(setData({ users: data }));
    }
    catch (error) {
      console.log(error)
      throw(error.message)
    }
  };
};

export const deleDataAction = (id) => {
  
  return async (dispatch) => {
    try {
     
     let result = await deleteUserBd(id);
  
     if(result == true){
        dispatch(deleteUser({ id: id }));
      }
    }
    catch (error) {
      console.log(error.message)
    }
  };
};

