import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const baseUrl = import.meta.env.API_BASE_URL;

console.log(import.meta);

export const login = createAsyncThunk(
  "login/login",
  async ({ userName, password }) => {
    try {
      const { data } = await axios({
        method: "post",
        // url: `${baseUrl}/api/Auth/Authenticate`,
        url: `https://localhost:7224/api/Auth/Authenticate`,
        data: { userName, password },
      });
      console.log(data);
      sessionStorage.setItem("userInfo", JSON.stringify(data.data[0]));
    } catch (error) {
      return error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }
);

export const logout = createAsyncThunk("login/logout", async () => {
  sessionStorage.removeItem("userInfo");
  localStorage.removeItem("userInfo");
});
