import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../auth/operationsAuth";

export const getAllWordsThunk = createAsyncThunk(
  "getAllWordsThunk",
  async (
    {
      page = 1,
      limit = 10,
      keyword = "",
      category = "",
      isIrregular = "",
    } = {},
    thunkApi,
  ) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      const { data } = await axiosApi.get("/words/all", {
        params: { page, limit, keyword, category, isIrregular },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
