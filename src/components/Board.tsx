import React from "react";
import { PlayerEnum } from "../state/gameReducer";

interface BoardPropsModel {
  squares: (PlayerEnum | number)[];
  handleGameTurn: Function;
}

const Board = ({ squares, handleGameTurn }: BoardPropsModel) => {
  const isClicked = (square: PlayerEnum | number) => {
    return square === PlayerEnum.Player_1 || square === PlayerEnum.Player_2;
  };

  return (
    <div className='grid gap-4 grid-cols-3 p-4 '>
      {squares.map((i, index) => {
        return (
          <button
            onClick={() => handleGameTurn(i)}
            key={index}
            className={`flex items-center justify-center rounded-lg border-2 py-6 ${
              isClicked(i)
                ? `cursor-default`
                : "cursor-pointer hover:animate-pulse"
            }`}>
            <span className='text-7xl'>{i}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Board;
