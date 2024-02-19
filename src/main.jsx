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
import { Provider } from "react-redux";
import { restoreCSRF } from "./store/csrf";

import Root from "./Root.jsx";
import "./index.css";
import store from "./store";

if (import.meta.env.VITE_VERCEL_ENV !== "production") restoreCSRF();

let container = null;
document.addEventListener("DOMContentLoaded", () => {
	if (!container) {
		container = document.getElementById("root");
		const root = ReactDOM.createRoot(container);
		root.render(
			<React.StrictMode>
				<Provider store={store}>
					<Root />
				</Provider>
			</React.StrictMode>
		);
	}
});
