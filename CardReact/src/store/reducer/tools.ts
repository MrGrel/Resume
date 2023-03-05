import { IGameTools, TToolsAction, actionTypes } from "../../type/type";

let gameTools:IGameTools = {
  startGame: false,
  timer: false,
  loading: true,
}

const reducerTools = (state = gameTools, action: TToolsAction):IGameTools => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return { ...state, startGame: true };
    case actionTypes.END_GAME:
      return { ...state, timer: true }
    case actionTypes.NEW_GAME:
      return { ...state, startGame: false, timer: false }
    case actionTypes.GET_IMG:
      return { ...state, loading: false }

    default:
      return state

  }
}

export default reducerTools