import React from "react";
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
    resetGame,
  }: UseGameModel = useGame();

  return (
    <div className='container mx-auto w-full bg-black h-full'>
      <header className='flex justify-center'>
        <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      </header>
      <main className="p-4">
        <Board
          squares={boardSquares}
          handleGameTurn={handleGameTurn}
          isClicked={squareIsClicked}
        />
        <GameStatus score={gameScore} currentPlayer={currentPlayer} />
        <div className="flex justify-center p-4">
          <button
            className='px-8 py-4 border-2 bg-gray-500 text-white rounded-xl uppercase shadow-lg mt-8'
            onClick={() => resetGame()}>
            Reset Game
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
