import { motion } from "framer-motion";
const ListCard = ({ icon, text }) => {
	return (
		<motion.div
			initial={{ backgroundColor: "#2B2D31" }}
			whileHover={{
				backgroundColor: "#4e505899",
			}}
			transition={{ type: "spring", duration: 0.75, delay: 0 }}
			className="font-ggMedium text-discord-text-300 w-[221px] h-[42px] bg-[#4e505899] flex items-center pl-2 rounded-sm mb-0.5 cursor-pointer"
		>
			<span>{icon}</span>
			<span className="pl-3">{text}</span>
		</motion.div>
	);
};

export default ListCard;
