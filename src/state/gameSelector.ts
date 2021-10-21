import { GameStateModel } from "./gameReducer";

export class gameSelectors {
    static SelectBoardSquares(state: GameStateModel): Number[] {
        return state.boardSquares;
    }
}