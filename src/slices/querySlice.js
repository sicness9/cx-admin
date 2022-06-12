import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parseId: "",
  email: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    getParseId: (state, action) => {
      state.parseId += action.payload;
    },
    getEmail: (state, action) => {
      state.email += action.payload;
    },
  },
});

export const { getEmail, getParseId } = querySlice.actions;

export default querySlice.reducer;
