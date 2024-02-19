import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebaseAuth, onAuthStateChanged, doc, db, getDoc } from "../Firebase";
import { removeUser, setUser } from "./store/session";

import Authentication from "./pages/authentication";
import MainPage from "./pages/main";

import icon from "./assets/images/logo.png";

import Modal from "./components/Modal";
function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
			if (user) {
				const document = await getDoc(doc(db, "users", user.uid)).catch(
					(err) => console.error(err)
				);

				let username;
				let displayName;
				if (document?.exists()) {
					username = document.data().username;
					displayName = document.data().displayName;
				}

				const data = {
					username,
					displayName,
					uid: user.uid,
					email: user.email,
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
				<div className="bg-gradient-to-b from-primary to-discord-input-dark w-screen h-full min-w-screen min-h-screen flex flex-col justify-center items-center">
					<img
						className="w-20 h-20 animate-pulse"
						src={icon}
						alt="Relay logo"
					/>
					<div className="text-discord-text-200 font-ggBold mt-4 text-lg animate-pulse duration-300">
						Loading...
					</div>
				</div>
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
