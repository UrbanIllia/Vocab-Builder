import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "./operationsCat";

const initialState = {
  categories: [],
};

const slice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const categoriesReducer = slice.reducer;
