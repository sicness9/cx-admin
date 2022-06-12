import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.value.push(action.payload);
    },
    resetUser(state) {
      state.value = [];
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
