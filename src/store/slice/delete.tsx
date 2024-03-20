import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  id: "",
  name: "",
  open: false,
  target: "",
  targetName: "",
};

const deleteSlice = createSlice({
  name: "delete",
  initialState: INITAL_STATE,

  reducers: {
    setTarget: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.target = action.payload.target;
      state.targetName = action.payload.targetName;
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
