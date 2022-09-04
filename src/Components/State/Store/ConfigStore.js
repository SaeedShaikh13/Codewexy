import { combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "../Reducer/Reducer";
export const Store = legacy_createStore(
    combineReducers({Reducer}),
    composeWithDevTools()
)