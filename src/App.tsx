import React from "react";
import Board from "./components/Board";
import useGame, { UseGameModel } from "./hooks/useGame";

function App() {
  const { boardSquares }: UseGameModel = useGame();

  return (
    <div className='container mx-auto w-full'>
      <header className='flex justify-center'>
        <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      </header>
      <main>
        <Board squares={boardSquares}/>
      </main>
    </div>
  );
}

export default App;
