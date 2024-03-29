import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { hideModal, currentModal } from "../../../store/modal";
import { motion } from "framer-motion";

import MyAccountSettings from "./account";
import CloseIcon from "../icons/Close";
import LogoutIcon from "../icons/Logout";
import LogoutModal from "./LogoutModal";

const SettingsPage = () => {
	const _default = {
		acct: true,
		logout: false,
	};

	const _inactive = {
		acct: false,
		logout: false,
	};

	const [active, setActive] = useState(_default);
	const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);
	const dispatch = useDispatch();

	const escFunction = useCallback((event) => {
		if (event.key === "Escape") closeSettings();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);

		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, [escFunction]);

	const closeSettings = () => {
		dispatch(hideModal());
		dispatch(currentModal(null));
	};

	const tw = {
		active: "text-white bg-discord-settings-item",
		inactive: "text-discord-text-200",
		item: "text-base cursor-pointer py-2 px-2.5 hover:bg-discord-settings-item rounded flex items-center w-full h-8 mb-1",
		item_icon:
			"text-base py-2 px-2.5 cursor-pointer hover:bg-discord-settings-item flex items-center justify-between rounded w-full h-8 mb-1",
	};

	return (
		<motion.div
			exit={{ opacity: 0, x: 50 }}
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			className="min-w-full w-screen h-screen bg-primary flex"
		>
			<nav className="bg-discord-sidebar-2 w-[218px] min-w-[218px] h-full min-h-screen pt-[60px] pl-5 pr-1.5 text-discord-text-300 font-ggBold text-xs">
				<div className="px-2.5 pb-1.5">USER SETTINGS</div>

				<div
					className={`${tw.item} ${
						active.acct ? tw.active : tw.inactive
					}`}
					onClick={() => setActive({ ..._inactive, acct: true })}
				>
					My Account
				</div>
				<div
					className={`${tw.item_icon} ${
						active.logout ? tw.active : tw.inactive
					}`}
					onClick={() => setShowLogoutPrompt(true)}
				>
					<span>Logout</span>
					<LogoutIcon />
				</div>
			</nav>
			<div className="text-white flex-grow">
				{active.acct ? <MyAccountSettings /> : null}
			</div>
			<div className="w-16 pt-[60px] text-discord-text-300 flex items-center flex-col">
				<div
					className="border-2 border-discord-text-300 text-discord-text-300 hover:border-white hover:text-white rounded-full h-9 w-9 flex items-center justify-center cursor-pointer"
					onClick={closeSettings}
				>
					<CloseIcon />
				</div>
				<div className="font-ggBold text-[13px] text-discord-text-300 mt-2">
					ESC
				</div>
			</div>
			{showLogoutPrompt && (
				<LogoutModal
					hideLogoutModal={() => setShowLogoutPrompt(false)}
				/>
			)}
		</motion.div>
	);
};

export default SettingsPage;
