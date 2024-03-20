import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./character/charcterSlice";
import gameReducer from "./game/gameSlice";
import actionReducer from "./action/actionSlice";

const reducers = combineReducers({
  character: characterReducer,
  game: gameReducer,
  action: actionReducer,
});

export const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
