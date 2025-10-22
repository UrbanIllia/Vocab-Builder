import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../auth/operationsAuth";

export const getCategoriesThunk = createAsyncThunk(
  "getCategories",
  async (_, thunkApi) => {
    try {
      const { data } = await axiosApi.get("/words/categories");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
