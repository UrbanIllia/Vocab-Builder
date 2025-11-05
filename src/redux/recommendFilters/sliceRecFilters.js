import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendFilters: {
    filter: "",
    category: "",
    isIrregular: false,
  },
};

const slice = createSlice({
  name: "recommendFilters",
  initialState,
  reducers: {
    addRecommendFilters: (state, action) => {
      state.recommendFilters = {
        filter: action.payload.filter,
        category: action.payload.category,
        isIrregular: action.payload.isIrregular,
      };
    },
  },
});

export const reducerRecommendFilters = slice.reducer;

export const { addRecommendFilters } = slice.actions;
