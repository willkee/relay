import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import sessionReducer from "./session";

const reducer = {
	session: sessionReducer,
};

const store = configureStore({
	reducer,
	middleware: () => new Tuple(logger),
});

export default store;
