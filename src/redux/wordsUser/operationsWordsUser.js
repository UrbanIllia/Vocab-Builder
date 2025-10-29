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
      return data;
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
  async ({ page = 1, limit = 10 } = {}, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      setAuthHeader(token);
      const { data } = await axiosApi.get("/words/own", {
        params: { page, limit },
      });
      console.log("DATA:", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteOneUserWord = createAsyncThunk(
  "deleteOneUserWord",
  async (id, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");
    try {
      await axiosApi.delete(`/words/delete/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const patchByIdUserWordThunk = createAsyncThunk(
  "patchByIdUserWord",
  async ({ id, body }, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("No token");

    try {
      console.log("body", body);
      const { data } = await axiosApi.patch(`/words/edit/${id}`, body);
      return data;
    } catch (error) {
      console.error(
        "❌ patchByIdUserWordThunk error:",
        error.response?.data || error.message,
      );
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);
