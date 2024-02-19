import { useEffect, useRef } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { modalMount } from "./store/modal.js";

import App from "./App.jsx";
import store from "./store";

const Root = () => {
	const dispatch = useDispatch();
	const modalMountRef = useRef(null);

	useEffect(() => {
		dispatch(modalMount(modalMountRef.current));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<App />
			<div ref={modalMountRef} className="modal" />
		</BrowserRouter>
	);
};

export default Root;
