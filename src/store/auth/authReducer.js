import { createSlice } from '@reduxjs/toolkit'

export const authActions = createSlice({
    name: 'auth',
    initialState: {
      status: 'not-authenticated', // checking
      id: null,
      email: null,
      username: null,
      date: null,
      celphone: null,
      photoURL: null,
      errorMessage: null, 
    },
    reducers: {
        loging: (state, {payload}) => {
            state.status = 'authenticated';
            state.id = payload.id;
            state.email = payload.email;
            state.username = payload.name; 
            state.photoURL = payload.avatarUrl;
            state.errorMessage = null;
        },
        addNewUser:(state,{payload}) =>{
            state.status = 'authenticated', // checking
            state.id = payload.id;
            state.email = payload.email;
            state.username = payload.username;;
            state.date = payload.date;
            state.celphone = payload.celphone;
            state.photoURL = payload.photoURL;
        },
        updateUser:(state,{payload}) =>{
            state.username = payload.username;
            state.celphone = payload.celphone;
            state.date = payload.date;
            state.CreditCard = payload.CreditCard;
            state.Paypal = payload.Paypal;
        },
        logout: (state,{payload}) =>{
            state.status = 'not-authenticated', // checking
            state.id = null;
            state.email = null;
            state.username = null;
            state.photoURL = null;
            state.date = null;
            state.celphone = null;
            state.errorMessage = payload;
        },
        chekingCredentials: (state) =>{
            state.status = 'checking'
        }
    }
});

export const { loging, logout, chekingCredentials, addNewUser, updateUser } = authActions.actions;