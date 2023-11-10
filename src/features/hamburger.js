import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburger: false,
};

export const phonemenu = createSlice({
  name: "phonemenu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.hamburger = !state.hamburger;
    },
  },
});

export const { toggleMenu } = phonemenu.actions;
export default phonemenu.reducer;
