import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/settings";
import deleteSlice from "./slice/delete";
import addUpdateSlice from "./slice/add-update";

export const store = configureStore({
  reducer: {
    settings: settingSlice,
    delete: deleteSlice,
    addUpdate: addUpdateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
