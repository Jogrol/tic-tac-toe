import { createAction } from "@reduxjs/toolkit";

export enum GameActionEnum {
  SetBoardSquares = "SET_BOARD_SQUARES",
}

export class gameActions {
  static setBoardSquares = createAction<number[]>(
    GameActionEnum.SetBoardSquares
  )
}


