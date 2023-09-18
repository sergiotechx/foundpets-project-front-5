import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    errorMessage: null
};



export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            console.log('payload', payload)
            state.users= payload.users   
            // state.errorMessage= null
        },

        deleteUser: (state, { payload }) => {
            try{
                
                console.log('temporal',state);
                //state.users = state.users.filter(user => user.id != action.payload.id)
                //  state.errorMessage = null
            } 
            catch(error){
                console.log(error.message)
            }
            
        }
    }
});

export const { setData, deleteUser } = adminSlice.actions;