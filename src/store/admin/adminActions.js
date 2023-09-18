'use client'
import { setData, deleteUser } from "./adminReducer";
import { getUsers } from '../../lib/pocketbase'
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://foundpets.pockethost.io');

export const getDataAction = () => {
  
  return async (dispatch) => {
    try {
     /* const data2 = {
        "username": '12123',
        "email": 'gugu@gmail.com',
        "emailVisibility": true,
        "password": '123456',
        "passwordConfirm": '123456',
        "name": 'le yu de glua'
      }*/;
    
    //const record = await client.collection('users').create({name:'hhhhuuu',password:'0123456789',passwordConfirm:'0123456789'});
      let result = await getUsers();
      let data = [];
      result.forEach((user) => { const date = new Date(user.updated); data.push({ id: user.id, name: user.name, date: date.toLocaleString() }) })
      dispatch(setData({ users: data }));
    }
    catch (error) {
      console.log(error)
    }
  };
};


