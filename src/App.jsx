import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebaseAuth, onAuthStateChanged, doc, db, getDoc } from "../Firebase";
import { removeUser, setUser } from "./store/session";

import Authentication from "./pages/authentication";
import MainPage from "./pages/main";

import Modal from "./components/Modal";
function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
			if (user) {
				const document = await getDoc(doc(db, "users", user.uid));

				let username;
				if (document.exists()) username = document.data().username;

				const data = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					phoneNumber: user.phoneNumber,
					username,
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
				<div className="mobile:bg-primary sm:bg-welcome w-[100vw] h-full min-w-screen min-h-screen bg-cover bg-center font-sans flex justify-center sm:items-center" />
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
