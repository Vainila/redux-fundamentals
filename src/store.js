import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { sayHiOnDispatch, includeMeaningOfLife} from "./exampleAddons/enhancers";
import { loggerMiddleware } from "./exampleAddons/middleware";
import {composeWithDevTools} from "redux-devtools-extension";

let preloadedState;

const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  };
}

const composedEnhancer = composeWithDevTools(
   applyMiddleware(loggerMiddleware)
);


const store = createStore(rootReducer, composedEnhancer);

export default store;
