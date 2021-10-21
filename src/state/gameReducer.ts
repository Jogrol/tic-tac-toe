import { createReducer } from "@reduxjs/toolkit";
import { gameActions } from "./gameActions";

export interface GameStateModel {
  boardSquares: number[];
}

const initialState = {
  boardSquares: Array.from(Array(9).keys()),
} as GameStateModel;

const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(gameActions.setBoardSquares, (state, action) => {
    state.boardSquares = action.payload;
  });
});

export default gameReducer;
