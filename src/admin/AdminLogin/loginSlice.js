import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";
import { logout } from "./thunk";

const loginSlice = createSlice({
  name: "login",
  initialState: { loading: false, userInfo: null, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.userInfo = null;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.userInfo = null;
        state.error = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
