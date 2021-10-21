import React from "react";
import { PlayerEnum } from "../state/gameReducer";

export interface GameStatusPropsModel {
  currentPlayer: PlayerEnum;
}

const GameStatus = ({ currentPlayer }: GameStatusPropsModel) => {
  return (
    <div className='grid grid-cols-2'>
      <div
        className={`p-4 flex justify-center rounded-md ${
          currentPlayer === PlayerEnum.Player_1 ? "bg-red-500" : "bg-yellow-100"
        }`}>
        <p>Player {PlayerEnum.Player_1}</p>
      </div>
      <div
        className={`p-4 flex justify-center rounded-md ${
          currentPlayer === PlayerEnum.Player_2 ? "bg-red-500" : "bg-yellow-100"
        }`}>
        <p>Player {PlayerEnum.Player_2}</p>
      </div>
    </div>
  );
};
export default GameStatus;
