import { createStore, applyMiddleware } from "redux";
import placeholderReducer from "./placeholderReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
	placeholderReducer,
	applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
