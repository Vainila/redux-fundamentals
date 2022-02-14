import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import {
  sayHiOnDispatch,
  includeMeaningOfLife
} from "./exampleAddons/enhancers";
import { loggerMiddleware } from "./exampleAddons/middleware";

let preloadedState;

const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  };
}

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
const middlewareEnhacer = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, middlewareEnhacer);

export default store;
