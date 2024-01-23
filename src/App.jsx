import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebaseAuth, onAuthStateChanged } from "../Firebase";
import { removeUser, setUser } from "./store/session";

import Authentication from "./pages/authentication";
import MainPage from "./pages/main";

import Modal from "./components/Modal";
function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				const data = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					phoneNumber: user.phoneNumber,
				};

				dispatch(setUser(data));
			} else {
				dispatch(removeUser());
			}
			setIsLoaded(true);
		});

		return () => unsubscribe();
	}, [dispatch]);

	return (
		<>
			<Modal />
			{!isLoaded ? (
				<div>Loading...</div>
			) : (
				<Routes>
					<Route
						exact
						path="/"
						element={user ? <MainPage /> : <Navigate to="/login" />}
					/>
					<Route
						path="*"
						element={<Authentication active={!!user} />}
					/>
				</Routes>
			)}
		</>
	);
}

export default App;
