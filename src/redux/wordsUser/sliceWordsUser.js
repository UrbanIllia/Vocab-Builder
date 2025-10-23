import { createSlice } from "@reduxjs/toolkit";
import { addUserWordThunk } from "./operationsWordsUser";

const initialState = {
  en: "",
  ua: "",
  category: "",
  isIrregular: false,
};

const slice = createSlice({
  name: "createOwnWord",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addUserWordThunk.fulfilled, (state, action) => {
      state.en = action.payload.en;
      state.ua = action.payload.ua;
      state.category = action.payload.category;
      state.isIrregular = action.payload.isIrregular;
    });
  },
});

export const reducerAddOwnWord = slice.reducer;
