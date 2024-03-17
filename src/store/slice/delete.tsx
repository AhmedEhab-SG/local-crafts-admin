import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  id: "",
  name: "",
  open: false,
};

const deleteSlice = createSlice({
  name: "delete",
  initialState: INITAL_STATE,

  reducers: {
    setTarget: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    onOpen: (state) => {
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
  },
});

export const { setTarget, onOpen, onClose } = deleteSlice.actions;

export default deleteSlice.reducer;
