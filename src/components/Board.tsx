import React from "react";
import { PlayerEnum } from "../state/gameReducer";

interface BoardPropsModel {
  squares: (PlayerEnum | number)[];
  handleGameTurn: Function;
  isClicked: Function;
}

const Board = ({ squares, handleGameTurn, isClicked }: BoardPropsModel) => {
  return (
    <div className='grid gap-4 grid-cols-3 p-4 '>
      {squares.map((i, index) => {
        return (
          <button
            onClick={() => handleGameTurn(i)}
            key={index}
            disabled={isClicked(i)}
            className={`flex items-center bg-gray-200 justify-center rounded-lg border-2 shadow-md py-6 ${
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
