import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calcFhNums } from "../../character/utilities";

// Define a type for the slice state
export interface Turn {
  status: { age: number };
  turnAction: { firstDie: number; secondDie: number; sum: number };
  result: { events: string[] };
}

interface Status {
  dn: number;
  fh: number[];
  wealth: number;
  le: number;
  age: number;
}

// Define a type for the slice state
interface CharacterState {
  name: string;
  history: Turn[];
  status: Status;
}

// Define the initial state using that type
const initialState: CharacterState = {
  name: "default jonson",
  history: [],
  status: { dn: 2, fh: [3], wealth: 10, le: 0, age: 0 },
};

export const characterSlice = createSlice({
  name: "character",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName: (state, action: { payload: string }) => {
      state.name = action.payload;
    },
    addRecord: (state, action: { payload: Turn }) => {
      const newHistory = state.history;
      newHistory.unshift(action.payload);
      state.history = newHistory;
      state.status.age = state.status.age + 1;
    },
    setWealth: (state, action: { payload: number }) => {
      state.status.wealth = action.payload;
    },
    modWealth: (state, action: { payload: number }) => {
      state.status.wealth = state.status.wealth + action.payload;
    },
    addStatusDnFh: (state) => {
      const newDn = state.status.dn + 1;
      state.status.dn = newDn;
      const fhNums = calcFhNums(newDn);
      state.status.fh = fhNums;
    },
    rmStatusDnFh: (state) => {
      const newDn = state.status.dn - 1;
      state.status.dn = newDn;
      const fhNums = calcFhNums(newDn);
      state.status.fh = fhNums;
    },
    addLifeEvent: (state) => {
      state.status.le = state.status.le + 1;
    },
    resetCharacter: () => {
      let newName = prompt("What is this life's name?");
      if (!newName) {
        newName = "default Johnson";
      }
      let init = { ...initialState, name: newName };
      return init;
    },
  },
});

export const {
  setName,
  addRecord,
  setWealth,
  modWealth,
  addStatusDnFh,
  rmStatusDnFh,
  resetCharacter,
  addLifeEvent,
} = characterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCharacter = (state: RootState) => state.character;

export default characterSlice.reducer;
