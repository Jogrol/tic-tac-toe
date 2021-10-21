import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../state/gameActions";
import { PlayerEnum } from "../state/gameReducer";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: any[];
  currentPlayer: PlayerEnum;
  handleGameTurn: Function;
  squareIsClicked: Function;
}

const useGame = (): UseGameModel => {
  const dispatch = useDispatch();
  const boardSquares = useSelector(gameSelectors.SelectBoardSquares);
  const currentPlayer = useSelector(gameSelectors.SelectCurrentPlayer);

  const handleGameTurn = (index: number): void => {
    let updatedBoardSquares = [...boardSquares];
    updatedBoardSquares[index] = currentPlayer;
    togglePlayer();
    if (checkForWin(updatedBoardSquares)) {
      console.log('winning !', currentPlayer);
    }

    dispatch(gameActions.setBoardSquares(updatedBoardSquares));
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

  return {
    boardSquares,
    currentPlayer,
    handleGameTurn,
    squareIsClicked,
  };
};

export default useGame;
