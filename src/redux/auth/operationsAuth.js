import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});

export const setAuthHeader = (token) => {
  if (token) {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosApi.defaults.headers.common.Authorization;
  }
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
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  "loginUser",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axiosApi.post("/users/signin", credentials);
      console.log("Response login:", data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.error(
        "Error in loginUserThunk:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const getCurrentUserThunk = createAsyncThunk(
  "getCurrent",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      setAuthHeader(token);
      const response = await axiosApi.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "logoutUser",
  async (_, thunkApi) => {
    try {
      await axiosApi.post("/users/signout");
      setAuthHeader("");
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
