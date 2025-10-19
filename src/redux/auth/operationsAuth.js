import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});

export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUserThunk = createAsyncThunk(
  "registerUser",
  async (credentials, thunkApi) => {
    try {
      const response = await axiosApi.post("/users/signup", credentials);
      console.log("Response register:", response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error(
        "Error in registerUserThunk:",
        error.response?.data || error.message,
      );
      thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  "loginUser",
  async (credentials, thunkApi) => {
    try {
      const response = await axiosApi.post("/users/signin", credentials);
      console.log("Response login:", response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error(
        "Error in loginUserThunk:",
        error.response?.data || error.message,
      );
      thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);
