import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dictionaryFilters: {
    filter: "",
    category: "",
    isIrregular: false,
  },
};

const slice = createSlice({
  name: "dictionaryFilters",
  initialState,
  reducers: {
    addDictionaryFilters: (state, action) => {
      state.dictionaryFilters = {
        filter: action.payload.filter,
        category: action.payload.category,
        isIrregular: action.payload.isIrregular,
      };
    },
  },
});

export const dictionaryFiltersReducer = slice.reducer;

export const { addDictionaryFilters } = slice.actions;
