import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "./signUp";
import SignIn from "./signIn";
import LoadingPage from "./loading";

const Authentication = ({ active }) => {
	return (
		<div className="mobile:bg-primary sm:bg-welcome w-screen h-full min-w-screen min-h-screen bg-cover bg-center font-sans flex justify-center sm:items-center">
			<Routes>
				<Route
					exact
					path="/login"
					element={active ? <Navigate to="/" /> : <SignIn />}
				/>
				<Route
					exact
					path="/register"
					element={active ? <Navigate to="/" /> : <SignUp />}
				/>
				<Route exact path="/loading" element={<LoadingPage />} />
			</Routes>
		</div>
	);
};

export default Authentication;
