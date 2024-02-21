import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo.png";
import { getUserServers } from "../../../store/servers";

const MainSidebar = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);

	useEffect(() => {
		if (user.uid) dispatch(getUserServers(user.uid));
	}, [dispatch, user.uid]);

	return (
		<div className="w-[72px] bg-discord-input-dark h-full text-white p-3 flex flex-col items-center">
			<motion.div
				initial={{ borderRadius: "100%", backgroundColor: "#313338" }}
				whileHover={{
					scale: 1,
					borderRadius: "25%",
					backgroundColor: "#5865f2",
				}}
				transition={{ type: "spring", duration: 0.75, delay: 0 }}
				className=" w-full h-12 p-2 cursor-pointer"
			>
				<img src={logo} alt="Relay logo" />
			</motion.div>
			<div className="w-8 h-0.5 bg-discord-divider my-3 flex" />
		</div>
	);
};

export default MainSidebar;
