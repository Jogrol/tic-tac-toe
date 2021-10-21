import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../state/gameActions";
import {
  GameStateScoreModel,
  PlayerEnum,
} from "../state/gameReducer";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: (number | PlayerEnum)[];
  currentPlayer: PlayerEnum;
  gameScore: GameStateScoreModel;
  handleGameTurn: Function;
  squareIsClicked: Function;

  createGame: Function;
  gridSize: number;
  setGridSize: Function;
}

const useGame = (): UseGameModel => {
  const dispatch = useDispatch();
  const boardSquares = useSelector(gameSelectors.selectBoardSquares);
  const currentPlayer = useSelector(gameSelectors.selectCurrentPlayer);
  const gameScore = useSelector(gameSelectors.selectCurrentScore);
  const winningGrid = useSelector(gameSelectors.selectWinningGrid);
  const [gridSize, setGridSize] = useState<number>(3);

  const handleGameTurn = (index: number): void => {
    let updatedBoardSquares = [...boardSquares];
    updatedBoardSquares[index] = currentPlayer;

    if (checkForWin(updatedBoardSquares)) {
      dispatch(gameActions.setBoardSquares(updatedBoardSquares));
      alert(`Well Done, Player ${currentPlayer}!`);
      updateScore();
      newGame();
    } else if (checkForDraw(updatedBoardSquares)) {
      alert("Its a draw. try again!");
      newGame();
    } else {
      dispatch(gameActions.setBoardSquares(updatedBoardSquares));
    }

    togglePlayer();
  };

  const updateScore = (): void => {
    if (currentPlayer === PlayerEnum.Player_1) {
      dispatch(gameActions.incrementScorePlayerOne());
    } else {
      dispatch(gameActions.incrementScorePlayerTwo());
    }
  };

  const checkForDraw = (squares: (PlayerEnum | number)[]): boolean => {
    return squares.every((i) => {
      return i === PlayerEnum.Player_1 || i === PlayerEnum.Player_2;
    });
  };

  const checkForWin = (squares: (PlayerEnum | number)[]): boolean => {
    const updatedWinningOutcomes = winningGrid.map((item) => {
      const updatedItem = item.map((i) => squares[Number(i)]);
      return updatedItem;
    });

    const isWinning = updatedWinningOutcomes.some((item) => {
      return item.every((winningOutcome) => winningOutcome === currentPlayer);
    });

    return isWinning;
  };

  const squareIsClicked = (square: number | PlayerEnum): boolean => {
    return square === PlayerEnum.Player_1 || square === PlayerEnum.Player_2;
  };

  const togglePlayer = (): void => {
    dispatch(
      gameActions.setPlayer(
        currentPlayer === PlayerEnum.Player_1
          ? PlayerEnum.Player_2
          : PlayerEnum.Player_1
      )
    );
  };

  const newGame = () => {
    const totalSquares: number = gridSize * gridSize;
    dispatch(
      gameActions.setBoardSquares(Array.from(Array(totalSquares).keys()))
    );
  };

  const createGame = (grid: number) => {
    const totalSquares: number = grid * grid;

    const winningGrid: number[][] = createWinningGrid(
      grid,
      Array.from(Array(totalSquares).keys())
    );
    dispatch(
      gameActions.setBoardSquares(Array.from(Array(totalSquares).keys()))
    );
    setGridSize(grid);

    dispatch(gameActions.setWinningGrid(winningGrid));
  };

  const createWinningGrid = (
    grid: number,
    boardGameSquares: number[]
  ): number[][] => {
    const horizontalSquares: number[][] = boardGameSquares
      .map(() => {
        const result = boardGameSquares.splice(0, grid);
        return result;
      })
      .filter((i) => i);

    let verticalSquares: number | number[][] = [];

    for (let i = 0; i < horizontalSquares.length; i++) {
      let array = [horizontalSquares.map((item) => item[i])];
      verticalSquares = [...verticalSquares, ...array];
    }

    let diagonalSquaresLeftToRright: number | number[] = [];

    for (let i = 0; i < horizontalSquares.length; i++) {
      let array = [horizontalSquares[i][i]];
      diagonalSquaresLeftToRright = [...diagonalSquaresLeftToRright, ...array];
    }

    let diagonalSquaresRightToLeft: number | number[] = [];

    for (let i = 0; i < horizontalSquares.length; i++) {
      const reversedHorizontalSquares = [...horizontalSquares[i]].reverse();
      let array = [reversedHorizontalSquares[i]];
      diagonalSquaresRightToLeft = [...diagonalSquaresRightToLeft, ...array];
    }

    const winningGrid: number[][] = [
      ...horizontalSquares,
      ...verticalSquares,
      [...diagonalSquaresLeftToRright],
      [...diagonalSquaresRightToLeft],
    ];

    return winningGrid;
  };

  return {
    boardSquares,
    currentPlayer,
    gameScore,
    gridSize,
    handleGameTurn,
    squareIsClicked,
    createGame,
    setGridSize,
  };
};

export default useGame;
