import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import sessionReducer from "./session";
import serversReducer from "./servers";
import modalReducer from "./modal";

const reducer = {
	session: sessionReducer,
	modal: modalReducer,
	servers: serversReducer,
};
const middleware = () => new Tuple(thunk, logger);

const store = configureStore({ reducer, middleware });

export default store;
