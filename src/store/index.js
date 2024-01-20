import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import sessionReducer from "./session";

const reducer = { session: sessionReducer };
const middleware = () => new Tuple(thunk, logger);

const store = configureStore({ reducer, middleware });

export default store;
