import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameSatus";
import useGame, { UseGameModel } from "./hooks/useGame";

function App() {
  const {
    boardSquares,
    currentPlayer,
    handleGameTurn,
    squareIsClicked,
    gameScore,
    createGame,
    gridSize,
  }: UseGameModel = useGame();
  const [updateGrid, setUpdateGrid] = useState(3);

  useEffect(() => {
    createGame(updateGrid);
  }, []);

  return (
    <div className='container mx-auto w-full bg-black h-full'>
      <header className='flex justify-center'>
        <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      </header>
      <main className='p-4'>
        <Board
          squares={boardSquares}
          handleGameTurn={handleGameTurn}
          isClicked={squareIsClicked}
          gridSize={gridSize}
        />
        <GameStatus score={gameScore} currentPlayer={currentPlayer} />

        <div className='flex flex-col justify-center p-4'>
          <p className='text-xl text-white text-center'>Select grid size</p>
          <div className='flex justify-center gap-4 p-4'>
            <button
              className='bg-white rounded-full py-4 px-6 hover:bg-red-400'
              onClick={() => setUpdateGrid(3)}>
              3
            </button>
            <button
              className='bg-white rounded-full py-4 px-6 hover:bg-red-400'
              onClick={() => setUpdateGrid(4)}>
              4
            </button>
            <button
              className='bg-white rounded-full py-4 px-6 hover:bg-red-400'
              onClick={() => setUpdateGrid(5)}>
              5
            </button>
          </div>
          <button
            className='px-8 w-full py-4 border-2 bg-gray-500 text-white uppercase rounded-full'
            onClick={() => createGame(updateGrid)}>
            Start a new Game!
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
