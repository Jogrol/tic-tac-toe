import { createAction } from "@reduxjs/toolkit";
import { PlayerEnum } from "./gameReducer";

export enum GameActionEnum {
  SetBoardSquares = "SET_BOARD_SQUARES",
  SetPlayerEnum = 'SET_PLAYER_ENUM',
}

export class gameActions {
  static setBoardSquares = createAction<(PlayerEnum | number)[]>(
    GameActionEnum.SetBoardSquares
  )
  static setPlayer = createAction<PlayerEnum>(
    GameActionEnum.SetPlayerEnum
  )
}


