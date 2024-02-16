import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { hideModal, currentModal } from "../../../store/modal";

import MyAccountSettings from "./MyAccount";
import CloseIcon from "../icons/Close";

const SettingsPage = () => {
	const dispatch = useDispatch();
	const [activeListItem, setActiveListItem] = useState("account");

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

	return (
		<div className="min-w-full w-screen h-screen bg-primary flex">
			<nav className="bg-discord-sidebar-2 w-[218px] h-full min-h-screen pt-[60px] pl-[20px] pr-[6px] text-discord-text-300 font-ggBold text-xs">
				<div className="px-[10px] pb-[6px]">USER SETTINGS</div>

				<div
					className={`text-[16px] py-[8px] px-[10px] bg-discord-settings-item rounded w-full h-[32px] mb-1 ${
						activeListItem === "account"
							? "text-white"
							: "text-discord-text-200"
					}`}
				>
					My Account
				</div>
			</nav>
			<div className="text-white flex-grow">
				{activeListItem === "account" ? <MyAccountSettings /> : <></>}
			</div>
			<div className="w-16 pt-[60px] text-discord-text-300 flex items-center flex-col">
				<div
					className="border-2 border-discord-text-300 text-discord-text-300 hover:border-white hover:text-white rounded-full h-9 w-9 flex items-center justify-center cursor-pointer"
					onClick={closeSettings}
				>
					<CloseIcon />
				</div>
				<div className="font-ggBold text-[13px] text-discord-text-300 mt-[8px]">
					ESC
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
