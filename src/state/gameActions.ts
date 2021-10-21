import { createAction } from "@reduxjs/toolkit";
import { PlayerEnum } from "./gameReducer";

export enum GameActionEnum {
  SetBoardSquares = "SET_BOARD_SQUARES",
  SetPlayerEnum = 'SET_PLAYER_ENUM',
  IncrementScorePlayerOne = "INCREMENT_SCORE_PLAYER_ONE",
  IncrementScorePlayerTwo = "INCREMENT_SCORE_PLAYER_TWO",
}

export class gameActions {
  static setBoardSquares = createAction<(PlayerEnum | number)[]>(
    GameActionEnum.SetBoardSquares
  )
  static setPlayer = createAction<PlayerEnum>(
    GameActionEnum.SetPlayerEnum
  )
  static incrementScorePlayerOne = createAction(
    GameActionEnum.IncrementScorePlayerOne
  )
  static incrementScorePlayerTwo = createAction(
    GameActionEnum.IncrementScorePlayerTwo
  )
}


