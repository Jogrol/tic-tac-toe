import { GameStateModel, GameStateScoreModel, PlayerEnum } from "./gameReducer";

export class gameSelectors {
  static selectBoardSquares(state: GameStateModel): (PlayerEnum | number)[] {
    return state.boardSquares;
  }

  static selectCurrentPlayer(state: GameStateModel): PlayerEnum {
    return state.currentPlayer;
  }

  static selectCurrentScore(state: GameStateModel): GameStateScoreModel {
    return state.score;
  }

  static selectWinningGrid(state: GameStateModel): (PlayerEnum | number)[][] {
      return state.winningGrid;
  }
}
