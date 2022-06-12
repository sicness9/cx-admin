import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { mileiqApi } from "../services/mileiq";
import userSlice from "../slices/userSlice";
import querySlice from "../slices/querySlice";
import loadingSlice from "../slices/loadingSlice";

export const store = configureStore({
  reducer: {
    [mileiqApi.reducerPath]: mileiqApi.reducer,
    user: userSlice,
    query: querySlice,
    loading: loadingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mileiqApi.middleware),
});

setupListeners(store.dispatch);
