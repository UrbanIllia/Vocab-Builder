import { createSlice } from "@reduxjs/toolkit";
import { getAllWordsThunk } from "./operationsAllWords";

const initialState = {
  words: [],
  page: 1,
  perPage: 7,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "getAllWords",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWordsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllWordsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.words = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllWordsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const reducerAllWords = slice.reducer;
