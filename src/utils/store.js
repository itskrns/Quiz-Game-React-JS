import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../components/Game/GameSlice";
import playerReducer from "../components/Player/PlayerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    game: gameReducer,
  },
});

export default store;
