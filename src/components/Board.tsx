import React from "react";
import { PlayerEnum } from "../state/gameReducer";

interface BoardPropsModel {
  squares: (PlayerEnum | number)[];
  handleGameTurn: Function;
  isClicked: Function;
  gridSize: number;
}

const Board = ({
  squares,
  handleGameTurn,
  isClicked,
  gridSize = 3,
}: BoardPropsModel) => {
  const getGridSize = (gridSize: number) => {
    if (gridSize === 3) {
      return "grid-cols-3";
    }
    if (gridSize === 4) {
      return "grid-cols-4";
    }
    if (gridSize === 5) {
      return "grid-cols-5";
    }
  };

  return (
    <div className={`grid gap-4 p-4 ${getGridSize(gridSize)}`}>
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
