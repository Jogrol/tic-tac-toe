import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../state/gameActions";
import { GameStateScoreModel, initialState, PlayerEnum } from "../state/gameReducer";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: (number | PlayerEnum)[];
  currentPlayer: PlayerEnum;
  gameScore: GameStateScoreModel;
  handleGameTurn: Function;
  squareIsClicked: Function;
  resetGame: Function;
}

const useGame = (): UseGameModel => {
  const dispatch = useDispatch();
  const boardSquares = useSelector(gameSelectors.selectBoardSquares);
  const currentPlayer = useSelector(gameSelectors.selectCurrentPlayer);
  const gameScore = useSelector(gameSelectors.selectCurrentScore);

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
    const winningOutcomes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ] as (PlayerEnum | number)[][];

    const updatedWinningOutcomes = winningOutcomes.map((item) => {
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
    dispatch(gameActions.setBoardSquares(Array.from(Array(9).keys())));
  };

  const resetGame = () => {
    dispatch(gameActions.resetGame(initialState))
  }

  return {
    boardSquares,
    currentPlayer,
    gameScore,
    handleGameTurn,
    squareIsClicked,
    resetGame
  };
};

export default useGame;
