/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import DefaultAvatars from "../icons/DefaultAvatars";

const ServersList = ({ active, setActive }) => {
	const [hoverState, setHoverState] = useState(null);

	const servers = useSelector((state) => state.servers);

	useEffect(() => {
		return () => setActive(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const variants = {
		visible: { opacity: 1, x: 0, zIndex: 200 },
		hidden: { opacity: 0, x: -50, zIndex: -200 },
	};

	const serverSelect = (serverId) => {
		setActive(serverId);
	};

	return (
		<>
			{Object.values(servers).map(({ serverId, icon, name }) => (
				<div
					className="relative w-full h-12 select-none"
					key={`${serverId}-${active === serverId}`}
				>
					<motion.div
						id="server_button"
						initial={
							active === serverId
								? {
										scale: 1,
										borderRadius: "25%",
										backgroundColor: "#5865f2",
								  }
								: {
										borderRadius: "100%",
										backgroundColor: "#313338",
								  }
						}
						whileHover={{
							scale: 1,
							borderRadius: "25%",
							backgroundColor: "#5865f2",
						}}
						transition={{
							type: "tween",
							duration: 0.25,
							delay: 0.1,
						}}
						onHoverStart={() => setHoverState(serverId)}
						onHoverEnd={() => setHoverState(null)}
						className=" w-full h-full p-2 cursor-pointer"
						onClick={() => serverSelect(serverId)}
					>
						<DefaultAvatars rq={icon} />
					</motion.div>
					<motion.div
						id="server_name"
						initial="hidden"
						animate={hoverState === serverId ? "visible" : "hidden"}
						variants={variants}
						className="absolute top-[18%] -right-[150%] bg-black px-2 py-1 rounded font-ggBold"
					>
						{name}
						<span
							className="absolute w-2 h-2 bg-black transform rotate-45 -left-1 top-1/3"
							style={{
								visibility:
									hoverState === serverId
										? "visible"
										: "hidden",
							}}
						/>
					</motion.div>
				</div>
			))}
		</>
	);
};
export default ServersList;
