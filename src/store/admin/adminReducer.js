import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    errorMessage: null
};



export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
<<<<<<< HEAD
        setData: (state, {payload}) => {
            console.log('payload', payload)
            state.users= payload.users   
            // state.errorMessage= null
=======

        setData: (state, action) => {
            state.users = action.payload.users;
            state.errorMessage = null
>>>>>>> sergioBranch
        },

        deleteUser: (state, { payload }) => {
            state.users = state.users.filter((user) => user.id = !action.payload.id)
            state.errorMessage = null
        }
    }
});

export const { setData, deleteUser } = adminSlice.actions;