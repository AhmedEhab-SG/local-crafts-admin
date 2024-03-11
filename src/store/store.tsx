import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/settings";

export const store = configureStore({
  reducer: {
    settings: settingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
