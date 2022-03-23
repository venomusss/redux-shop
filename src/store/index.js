import {combineReducers, createStore} from "redux";
import {cartReducer} from './cartReducer'
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    items: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());