'use client'
import { setData, deleteUser } from "./adminReducer";
import { getUsers } from '../../lib/pocketbase'



export const getDataAction = () => {
  
  return async (dispatch) => {
    try {
     
      let result = await getUsers();
      let data = [];
      result.forEach((user) => { data.push({ id: user.id, name: user.name, date: user.updated }) })
      dispatch(setData({ users: data }));
    }
    catch (error) {
      trhow(error.message)
    }
  };
};


