import { useSelector } from "react-redux";
import { PlayerEnum } from "../state/gameReducer";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: any[];
  currentPlayer: PlayerEnum;
}

const useGame = (): UseGameModel => {
  const boardSquares = useSelector(gameSelectors.SelectBoardSquares);
  const currentPlayer = useSelector(gameSelectors.SelectCurrentPlayer);

  return {
    boardSquares,
    currentPlayer
  };
};

export default useGame;
