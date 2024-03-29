import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import header from "../../../assets/images/header.svg";

const LoadingPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => navigate("/"), 2000);
		return () => clearTimeout(timer);
	}, [navigate, dispatch]);

	return (
		<motion.div
			exit={{ opacity: 0, y: -50 }}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			className="bg-primary mobile:w-full sm:w-480 text-white sm:rounded-md sm:shadow-md"
		>
			<header className="flex justify-center items-center sm:hidden">
				<img
					src={header}
					alt="header"
					width="180px"
					className="pl-2 mt-5 -mb-3 sm:hidden"
				/>
			</header>

			<div className="p-8 mobile:w-full">
				<section className="flex justify-center items-center flex-col">
					<h1 className="font-ggBold text-2xl text-discord-text-100">
						Loading
					</h1>
					<h2 className="text-base text-discord-text-200">
						Please wait...
					</h2>
				</section>
			</div>
		</motion.div>
	);
};

export default LoadingPage;
