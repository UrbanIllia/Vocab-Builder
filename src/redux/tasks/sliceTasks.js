import { createSlice } from "@reduxjs/toolkit";
import { getAllTasksThunk } from "./operationsTasks";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "allTasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTasksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const reducerAddTasks = slice.reducer;
