/* eslint-disable no-mixed-spaces-and-tabs */
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo.png";

const ProfileIcon = ({ active, setActive }) => {
	return (
		<motion.div
			key={`profile-icon-${active === "DM"}`}
			initial={
				active === "DM"
					? {
							scale: 1,
							borderRadius: "25%",
							backgroundColor: "#5865f2",
					  }
					: { borderRadius: "100%", backgroundColor: "#313338" }
			}
			whileHover={{
				scale: 1,
				borderRadius: "25%",
				backgroundColor: "#5865f2",
			}}
			transition={{ type: "spring", duration: 0.75, delay: 0 }}
			className=" w-full h-12 p-2 cursor-pointer"
			onClick={() => setActive("DM")}
		>
			<img src={logo} alt="Relay logo" />
		</motion.div>
	);
};

export default ProfileIcon;
