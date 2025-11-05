import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUserThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./operationsAuth";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    userId: "",
  },
  token: "",
  isLoading: false,
  error: null,
  isCheckingAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ========================= REGISTER =========================
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Registration failed";
      })

      // ========================= LOGIN =========================
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
      })

      // ========================= CURRENT USER =========================
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isCheckingAuth = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.userId = action.payload._id;
        state.token = action.payload.token || state.token;
        state.isCheckingAuth = false;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch user";
        state.isCheckingAuth = false;
        // ⚠️ если токен невалиден — можно сделать авто-логаут:
        // state.isLoggedIn = false;
        // state.token = "";
        // state.user = { name: "", email: "", userId: "" };
      })

      // ========================= LOGOUT =========================
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export const authReducer = authSlice.reducer;
