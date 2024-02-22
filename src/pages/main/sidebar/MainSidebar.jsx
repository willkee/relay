import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserServers } from "../../../store/servers";

import Divider from "../../../components/Divider";
import ProfileIcon from "./ProfileIcon";
import ServersList from "./ServersList";

const MainSidebar = ({ active, setActive }) => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		if (user.uid) dispatch(getUserServers(user.uid));
	}, [dispatch, user.uid]);

	const tw = {
		container:
			"w-[72px] bg-discord-input-dark h-full text-white p-3 flex flex-col items-center",
	};

	return (
		<div className={tw.container}>
			<ProfileIcon active={active} setActive={setActive} />
			<Divider />
			<ServersList active={active} setActive={setActive} />
		</div>
	);
};

export default MainSidebar;
