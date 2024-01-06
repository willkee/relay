import { useState, useEffect } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

const Authentication = () => {
	const [userExists, setUserExists] = useState(true);

	return (
		<div className="mobile:bg-primary sm:bg-welcome w-[100vw] h-full min-w-screen min-h-screen bg-cover bg-center font-sans flex justify-center sm:items-center">
			{userExists ? <SignIn setUserExists={setUserExists} /> : <SignUp />}
		</div>
	);
};

export default Authentication;
