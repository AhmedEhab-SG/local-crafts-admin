import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/settings";
import deleteSlice from "./slice/delete";

export const store = configureStore({
  reducer: {
    settings: settingSlice,
    delete: deleteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
