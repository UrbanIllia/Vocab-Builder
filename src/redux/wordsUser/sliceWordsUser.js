import { createSlice } from "@reduxjs/toolkit";
import { addUserWordThunk, getAllUserWords } from "./operationsWordsUser";

// const initialState = {
//   en: "",
//   ua: "",
//   category: "",
//   isIrregular: false,
// };
const initialState = {
  words: [],
  page: 1,
  perPage: 7,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "userWords",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(addUserWordThunk.fulfilled, (state, action) => {
      //   state.en = action.payload.en;
      //   state.ua = action.payload.ua;
      //   state.category = action.payload.category;
      //   state.isIrregular = action.payload.isIrregular;
      // })
      .addCase(getAllUserWords.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUserWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.words = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllUserWords.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // //////////////////////////////////////////////////////////////////////
      .addCase(addUserWordThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUserWordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.words.unshift(action.payload);
      })
      .addCase(addUserWordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const reducerOwnWord = slice.reducer;
