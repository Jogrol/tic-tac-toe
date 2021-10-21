import React from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameSatus";
import useGame, { UseGameModel } from "./hooks/useGame";

function App() {
  const { boardSquares, currentPlayer , handleGameTurn}: UseGameModel = useGame();

  return (
    <div className='container mx-auto w-full'>
      <header className='flex justify-center'>
        <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      </header>
      <main>
        <Board squares={boardSquares} handleGameTurn={handleGameTurn}/>
        <GameStatus currentPlayer={currentPlayer}/>
      </main>
    </div>
  );
}

export default App;
