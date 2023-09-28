import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authActions } from "./auth/authReducer";
import { adminSlice } from "./admin/adminReducer";
import { userSlice } from "./user/userReducer";

const rootReducer = {
  auth: authActions.reducer,
  admin: adminSlice.reducer,
  user: userSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  // ...otras configuraciones del store si es necesario
});
