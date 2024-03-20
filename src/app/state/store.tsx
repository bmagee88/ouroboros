import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./character/charcterSlice";
import gameReducer from "./game/gameSlice";

const reducers = combineReducers({
  character: characterReducer,
  game: gameReducer,
});

export const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
