import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import sessionReducer from "./session";

const reducer = { session: sessionReducer };

const store = configureStore({
	reducer,
	middleware: [thunk, logger],
});

export default store;
