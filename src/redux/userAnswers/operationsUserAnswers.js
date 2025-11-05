import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../auth/operationsAuth";

export const postUsersAnswersThunk = createAsyncThunk(
  "postUsersAnswers",
  async (body, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      const { data } = await axiosApi.post("/words/answers", body);
      console.log("Answers", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getUserStatisticsThunk = createAsyncThunk(
  "getUserStatisticsThunk",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      const { data } = await axiosApi.get("/words/statistics");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
