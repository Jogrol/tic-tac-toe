import React from "react";
import { GameStateScoreModel, PlayerEnum } from "../state/gameReducer";

export interface GameStatusPropsModel {
  currentPlayer: PlayerEnum;
  score: GameStateScoreModel;
}

const GameStatus = ({ currentPlayer, score }: GameStatusPropsModel) => {
  return (
    <div className='grid grid-cols-2 gap-4 w-full p-4'>
      <div
        className={`p-4 flex justify-center rounded-md ${
          currentPlayer === PlayerEnum.Player_1 ? "bg-red-500" : "bg-gray-300"
        }`}>
        <div className='flex flex-col items-center justify-center'>
          <p className='uppercase text-black'>Player {PlayerEnum.Player_1}</p>
          <p className='text-4xl'>{score[PlayerEnum.Player_1]}</p>
        </div>
      </div>
      <div
        className={`p-4 flex justify-center rounded-md ${
          currentPlayer === PlayerEnum.Player_2 ? "bg-red-500" : "bg-gray-300"
        }`}>
        <div className='flex flex-col items-center justify-center'>
          <p className='uppercase'>Player {PlayerEnum.Player_2}</p>
          <p className='text-4xl'>{score[PlayerEnum.Player_2]}</p>
        </div>
      </div>
    </div>
  );
};
export default GameStatus;
