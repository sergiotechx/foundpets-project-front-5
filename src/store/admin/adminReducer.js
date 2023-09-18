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
                console.log('pacho',state.users[0]);
                //state.users = state.users.filter(user => user.id != action.payload.id)
                //  state.errorMessage = null
           
            
        }
    }
});

export const { setData, deleteUser } = adminSlice.actions;