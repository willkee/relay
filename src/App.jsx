import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Amplify } from "aws-amplify";
// import { restoreUser } from "./store/session";
import awsConfig from "./aws-exports";
import Authentication from "./pages/authentication";
Amplify.configure(awsConfig);

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(restoreUser()).then(() => setIsLoaded(true));
	// }, [dispatch]);

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
