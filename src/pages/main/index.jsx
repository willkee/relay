import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const MainPage = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<div>User is logged in. Page under construction.</div>
			<button onClick={() => dispatch(logout())} className="bg-gray-200">
				LOG OUT
			</button>
		</div>
	);
};

export default MainPage;
