import { createAction } from "@reduxjs/toolkit";
import { GameStateModel, PlayerEnum } from "./gameReducer";

export enum GameActionEnum {
  SetPlayerEnum = "SET_PLAYER_ENUM",
  SetBoardSquares = "SET_BOARD_SQUARES",
  IncrementScorePlayerOne = "INCREMENT_SCORE_PLAYER_ONE",
  IncrementScorePlayerTwo = "INCREMENT_SCORE_PLAYER_TWO",
  ResetGame = "RESET_GAME",
  SetWinningGrid = "SET_WINNING_GRID"
}

export class gameActions {
  static setBoardSquares = createAction<(PlayerEnum | number)[]>(
    GameActionEnum.SetBoardSquares
  );

  static setPlayer = createAction<PlayerEnum>(GameActionEnum.SetPlayerEnum);

  static incrementScorePlayerOne = createAction(
    GameActionEnum.IncrementScorePlayerOne
  );

  static incrementScorePlayerTwo = createAction(
    GameActionEnum.IncrementScorePlayerTwo
  );

  static setWinningGrid = createAction<(PlayerEnum | number)[][]>(GameActionEnum.SetWinningGrid)

  static resetGame = createAction<GameStateModel>(GameActionEnum.ResetGame);
}
