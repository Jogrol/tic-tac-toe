import { createReducer } from "@reduxjs/toolkit";
import { gameActions } from "./gameActions";

export enum PlayerEnum {
  Player_1 = "O",
  Player_2 = "X",
}

export interface GameStateScoreModel {
  [PlayerEnum.Player_1]: number;
  [PlayerEnum.Player_2]: number;
}

export interface GameStateModel {
  boardSquares: (PlayerEnum | number)[];
  currentPlayer: PlayerEnum;
  score: GameStateScoreModel;
}

export const initialState = {
  boardSquares: Array.from(Array(9).keys()),
  currentPlayer: PlayerEnum.Player_1,
  score: {
    [PlayerEnum.Player_1]: 0,
    [PlayerEnum.Player_2]: 0,
  },
} as GameStateModel;

const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(gameActions.setBoardSquares, (state, action) => {
    state.boardSquares = action.payload;
  });

  builder.addCase(gameActions.setPlayer, (state, action) => {
    state.currentPlayer = action.payload;
  });

  builder.addCase(gameActions.incrementScorePlayerOne, (state) => {
    state.score[PlayerEnum.Player_1]++;
  });

  builder.addCase(gameActions.incrementScorePlayerTwo, (state) => {
    state.score[PlayerEnum.Player_2]++;
  });

  builder.addCase(gameActions.resetGame, () => {
    return initialState;
  });
});

export default gameReducer;
