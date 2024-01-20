import "./assets/fonts/gg_sans/gg_sans_Bold_Italic.ttf";
import "./assets/fonts/gg_sans/gg_sans_Bold.ttf";
import "./assets/fonts/gg_sans/gg_sans_Extrabold.ttf";
import "./assets/fonts/gg_sans/gg_sans_Medium.ttf";
import "./assets/fonts/gg_sans/gg_sans_Medium_Italic.ttf";
import "./assets/fonts/gg_sans/gg_sans_Normal.ttf";
import "./assets/fonts/gg_sans/gg_sans_Normal_Italic.ttf";
import "./assets/fonts/gg_sans/gg_sans_Semibold.ttf";

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

import App from "./App.jsx";
import store from "./store";

import "./index.css";

//eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
	csrfFetch("/api/v1/csrf");

	window.csrfFetch = csrfFetch;
	window.store = store;
	window.sessionActions = sessionActions;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
