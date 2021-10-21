import { createAction } from "@reduxjs/toolkit";
import { GameStateModel, PlayerEnum } from "./gameReducer";

export enum GameActionEnum {
  SetBoardSquares = "SET_BOARD_SQUARES",
  SetPlayerEnum = "SET_PLAYER_ENUM",
  IncrementScorePlayerOne = "INCREMENT_SCORE_PLAYER_ONE",
  IncrementScorePlayerTwo = "INCREMENT_SCORE_PLAYER_TWO",
  ResetGame = "RESET_GAME",
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

  static resetGame = createAction<GameStateModel>(GameActionEnum.ResetGame);
}
