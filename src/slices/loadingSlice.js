import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading(state, action) {
      state.value += action.payload;
    },
    resetLoading(state) {
      state.value = false;
    },
  },
});

export const { isLoading, resetLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
