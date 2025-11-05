import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi, setAuthHeader } from "../auth/operationsAuth";

export const getAllTasksThunk = createAsyncThunk(
  "getAllTasksThunk",
  async (body, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      setAuthHeader(token);
      const { data } = await axiosApi.get("/words/tasks");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
