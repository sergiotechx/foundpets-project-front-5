import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    pet: {},
    errorMessage: null
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.user = action.payload.user
            state.pet = action.payload.pet
            state.errorMessage = null
        },
        clearData: (state, action) => {
            state.user = {}
            state.pet = {}
            state.errorMessage = null
        },
        updateUser:(state, action) => {
           console.log(action.payload)
            state.user = action.payload.user
            state.errorMessage = null
        }
    }
});
export const { setData,clearData, updateUser } = userSlice.actions;