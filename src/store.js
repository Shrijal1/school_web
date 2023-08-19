import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./admin/AdminLogin/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
