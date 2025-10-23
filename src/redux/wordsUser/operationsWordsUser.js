import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../auth/operationsAuth";

export const addUserWordThunk = createAsyncThunk(
  "addUserWord",
  async (body, thunkApi) => {
    try {
      const { data } = axiosApi.post("words/create", body);
      console.log("Response register:", data);
    } catch (error) {
      console.error(
        "Error in addUserWordThunk:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
