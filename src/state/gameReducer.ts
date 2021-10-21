import { createReducer } from "@reduxjs/toolkit";
import { gameActions } from "./gameActions";

export enum PlayerEnum {
    Player_1 = 'O',
    Player_2 = "X"
}


export interface GameStateModel {
  boardSquares: (PlayerEnum | number)[]
  currentPlayer: PlayerEnum
}

const initialState = {
  boardSquares: Array.from(Array(9).keys()),
  currentPlayer: PlayerEnum.Player_1
} as GameStateModel;

const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(gameActions.setBoardSquares, (state, action) => {
    state.boardSquares = action.payload;
  });
  builder.addCase(gameActions.setPlayer, (state, action) => {
      state.currentPlayer = action.payload;
  })
});

export default gameReducer;
