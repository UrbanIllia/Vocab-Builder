import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddWordModalOpen: false,
  isBurgerMenuOpen: false,
  isWellDoneModalOpen: false,
};

const slice = createSlice({
  name: "uaSlice",
  initialState,
  reducers: {
    openAddWordModal: (state) => {
      state.isAddWordModalOpen = true;
    },
    closeAddWordModal: (state) => {
      state.isAddWordModalOpen = false;
    },
    openBurgerMenuOpen: (state) => {
      state.isBurgerMenuOpen = true;
    },
    closeBurgerMenuOpen: (state) => {
      state.isBurgerMenuOpen = false;
    },
    openWellDoneModal: (state) => {
      state.isWellDoneModalOpen = true;
    },
    closeWellDoneModal: (state) => {
      state.isWellDoneModalOpen = false;
    },
  },
});

export const uaReducer = slice.reducer;
export const {
  openAddWordModal,
  closeAddWordModal,
  openBurgerMenuOpen,
  closeBurgerMenuOpen,
  openWellDoneModal,
  closeWellDoneModal,
} = slice.actions;
