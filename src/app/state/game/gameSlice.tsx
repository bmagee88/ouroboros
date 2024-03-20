import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  firstDiceNumSides: number;
  secondDiceNumSides: number;
  maxDn: number;
  isActive: boolean;
}

// Define the initial state using that type
const initialState: GameState = {
  firstDiceNumSides: 8,
  secondDiceNumSides: 10,
  maxDn: 9,
  isActive: false,
};

export const gameSlice = createSlice({
  name: "game",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGameState: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setGameState } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
