import { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo.png";

import { doc, db, getDoc } from "../../../../Firebase";

const MainSidebar = () => {
	const { user } = useSelector((state) => state.session);

	const getServerData = async () => {
		const docDB = await getDoc(doc(db, "userServers", user.uid)).catch(
			(err) => console.error(err)
		);

		if (docDB?.exists()) {
			const servers = docDB.data().servers;

			if (servers.length) {
				for (const server of servers) {
					const serverData = await getDoc(
						doc(db, "servers", server)
					).catch((err) => console.error(err));

					console.log(serverData.data(), "server data");
				}
			}
		}
	};

	useEffect(() => {
		if (user.uid) getServerData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

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
