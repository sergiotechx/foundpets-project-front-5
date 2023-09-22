import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onePet: {},
  errorMessage: null,
};

export const onePetSlice = createSlice({
  name: "onePet",
  initialState,
  reducers: {
    setOnePet: (state, action) => {
      state.onePet = action.payload;
      state.errorMessage = null;
    },
    clearData: (state, action) => {
      state.user = {};
      state.pet = {};
      state.errorMessage = null;
    },
  },
});
export const { setOnePet } = onePetSlice.actions;
