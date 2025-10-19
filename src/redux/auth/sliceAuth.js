import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./operationsAuth";

const initialState = {
  isLoggedIn: false,
  isRefreshing: false,
  user: {
    name: "",
    email: "",
  },
  token: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log("Slice register action payload", action.payload);
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("Slice login action payload", action.payload);
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      });
  },
});

export const authReducer = slice.reducer;
