import React from "react";
import { PlayerEnum } from "../state/gameReducer";

interface BoardPropsModel {
  squares: (PlayerEnum | number)[];

}

const Board = ({ squares }: BoardPropsModel) => {

  return (
    <div className="grid gap-4 grid-cols-3 p-4">
      {squares.map((i) => {
        return (
          <div key={i} className='flex items-center justify-center rounded-lg border-2 py-6'>
            <span className="text-7xl">{i}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
