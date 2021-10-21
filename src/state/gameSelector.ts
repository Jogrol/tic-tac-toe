import { GameStateModel, PlayerEnum } from "./gameReducer";

export class gameSelectors {
    static SelectBoardSquares(state: GameStateModel): (PlayerEnum | number)[] {
        return state.boardSquares;
    }
    static SelectCurrentPlayer(state: GameStateModel): PlayerEnum {
        return state.currentPlayer
    }
}