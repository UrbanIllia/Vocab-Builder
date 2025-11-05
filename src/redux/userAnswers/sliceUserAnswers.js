import { createSlice } from "@reduxjs/toolkit";
import {
  getUserStatisticsThunk,
  postUsersAnswersThunk,
} from "./operationsUserAnswers";

const initialState = {
  answers: [],
  totalCount: "",
};

const slice = createSlice({
  name: "statistics",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserStatisticsThunk.fulfilled, (state, action) => {
        state.totalCount = action.payload.totalCount;
      })
      .addCase(postUsersAnswersThunk.fulfilled, (state, action) => {
        state.answers = action.payload;
      });
  },
});

export const userStatisticReducer = slice.reducer;
