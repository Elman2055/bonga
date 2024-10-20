import { configureStore } from "@reduxjs/toolkit";
import { bongaApi } from "./bonga.api";

export const store = configureStore({
  reducer: {
    [bongaApi.reducerPath]: bongaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bongaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
