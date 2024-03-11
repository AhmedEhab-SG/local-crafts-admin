import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  mode: "light",
  drawer: false,
};

const settingSlice = createSlice({
  name: "theme",
  initialState: INITAL_STATE,

  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode === "light" ? (state.mode = "dark") : (state.mode = "light");

      localStorage.setItem("mode", JSON.stringify(state.mode));
    },

    toggleDrawer: (state) => {
      state.drawer === false ? (state.drawer = true) : (state.drawer = false);
    },
    closeDrawer: (state) => {
      state.drawer = false;
    },
  },
});

export const { toggleDrawer, toggleMode, closeDrawer, setMode } =
  settingSlice.actions;

export default settingSlice.reducer;
