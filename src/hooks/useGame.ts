import { useSelector } from "react-redux";
import { gameSelectors } from "../state/gameSelector";

export interface UseGameModel {
  boardSquares: any[];
}

const useGame = (): UseGameModel => {
  const boardSquares = useSelector(gameSelectors.SelectBoardSquares);

  return {
    boardSquares,
  };
};

export default useGame;
