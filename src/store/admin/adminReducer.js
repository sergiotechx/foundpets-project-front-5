import { createSlice } from '@reduxjs/toolkit'

/*user info data structure
id: null,
      name: null,
      date: null,
      errorMessage: null, 
*/

export const adminActions = createSlice({
    name: 'admin',
    
    initialState: {
      users: [],
      errorMessage:null 
    },
    reducers: {
        setData: (state, {payload}) => {
            console.log('payload', payload)
            state.users= payload.users   
            state.errorMessage= null
        },
        deleteUser:(state,{payload}) =>{
            state.users = state.users.filter((user)=> user.id=! payload.id)
            state.errorMessage= null
        }
    }
});

export const { setData, deleteUser } = adminActions.actions;