import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../state/gameActions";
import { PlayerEnum } from "../state/gameReducer";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: any[];
  currentPlayer: PlayerEnum;
  handleGameTurn: Function;
}

const useGame = (): UseGameModel => {
  const dispatch = useDispatch();
  const boardSquares = useSelector(gameSelectors.SelectBoardSquares);
  const currentPlayer = useSelector(gameSelectors.SelectCurrentPlayer);

  const handleGameTurn = (index: number): void => {
    let updatedBoardSquares = [...boardSquares];
    updatedBoardSquares[index] = currentPlayer;

    togglePlayer();
    dispatch(gameActions.setBoardSquares(updatedBoardSquares));
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
  };
};

export default useGame;
