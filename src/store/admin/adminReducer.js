import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    errorMessage: null
};



export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.users= action.payload.users   
            state.errorMessage= null
           
        },
        deleteUser: (state, action) => {
            const usersCopy = JSON.parse(JSON.stringify(state.users));
            const filteredUsers = usersCopy.filter(user => user.id != action.payload.id)
            state.users= filteredUsers   
            state.errorMessage= null
        }
    }
});

export const { setData, deleteUser } = adminSlice.actions;