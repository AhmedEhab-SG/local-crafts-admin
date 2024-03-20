import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  id: "",
  name: "",
  target: "",
  action: "",
  open: false,
  reRender: false,
  parent: { _id: "", target: "" },
};

const addUpdateSlice = createSlice({
  name: "addUpdate",
  initialState: INITAL_STATE,

  reducers: {
    setTargetAction: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.target = action.payload.target;
    },
    setTargetParent: (state, action) => {
      state.parent = action.payload.parent;
    },
    setAction: (state, action) => {
      state.action = action.payload.action;
    },
    onOpenAction: (state) => {
      state.open = true;
    },
    toggleReRender: (state) => {
      state.reRender = !state.reRender;
    },
    onCloseAction: (state) => {
      state.open = false;
    },
  },
});

export const {
  setTargetAction,
  onOpenAction,
  onCloseAction,
  toggleReRender,
  setTargetParent,
  setAction,
} = addUpdateSlice.actions;

export default addUpdateSlice.reducer;
