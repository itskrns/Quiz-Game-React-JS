import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
  gender: "",
  email: "",
  topic: "",
  level: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer(state, action) {
      state.status = false;
      state.name = action.payload.name;
      state.level = action.payload.level;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.topic = action.payload.topic.split(":")[1];
    },
  },
});

export const { setPlayer } = playerSlice.actions;

export default playerSlice.reducer;
