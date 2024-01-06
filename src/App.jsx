import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { restoreUser } from "./store/session";
import Authentication from "./pages/authentication";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(restoreUser()).then(() => setIsLoaded(true));
	// }, [dispatch]);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const currentUser = useSelector((state) => state.session.user);

	return (
		<>
			{currentUser && isLoaded ? (
				<div>User is logged in. Page under construction.</div>
			) : (
				<Authentication />
			)}
		</>
	);
}

export default App;
