import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerGame from "./reducer/game";
import reducerTools from "./reducer/tools";

const rootReducer = combineReducers({
    game: reducerGame,
    tools: reducerTools,
})

export type TRootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;

