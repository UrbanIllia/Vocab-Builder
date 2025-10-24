import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi, setAuthHeader } from "../auth/operationsAuth";

export const addUserWordThunk = createAsyncThunk(
  "addUserWord",
  async (body, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      const cleanBody = { ...body };
      if (cleanBody.category !== "verb") {
        delete cleanBody.isIrregular;
      }
      setAuthHeader(token);
      const { data } = await axiosApi.post("/words/create", cleanBody);
      console.log("✅ Word added:", data);
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "Unknown error";

      console.error("❌ Error in addUserWordThunk:", errMsg);
      return thunkApi.rejectWithValue(errMsg);
    }
  },
);

export const getAllUserWords = createAsyncThunk(
  "getAllUserWords",
  async (body, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      setAuthHeader(token);
      const { data } = await axiosApi.get("/words/own");
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
