import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import logo from "../../assets/images/logo.png";

import SettingsIcon from "./icons/Settings";
import ListItems from "./listItem";

const MainPage = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);

	return (
		<div className="flex h-screen w-screen min-h-full bg-gray-200">
			<div className="w-[72px] bg-discord-input-dark h-full text-white p-3 flex flex-col items-center">
				<div className="rounded-xl w-full h-12 bg-discord-button p-2 cursor-pointer">
					<img
						className="bg-discord-button"
						src={logo}
						alt="Relay logo"
					/>
				</div>
				<div className="w-[32px] h-[2px] bg-discord-divider my-3 flex" />
			</div>
			<div className="w-[240px] bg-discord-sidebar-2">
				<div className="h-[48px] drop-shadow-xl border-b-[1px] border-discord-input-dark flex justify-center items-center">
					<div className="font-ggMedium text-discord-text-300 text-sm w-[220px] h-[28px] px-[6px] py-[1px] bg-discord-input-dark text-center flex items-center rounded-sm">
						Find or start a conversation
					</div>
				</div>
				<div className="flex flex-col items-center pt-[8px]">
					<ListItems />
					<div className="absolute bottom-0 text-white h-[52px] bg-discord-profile w-[240px] flex items-center justify-between px-3">
						<div className="flex items-center">
							<div className="bg-green-900 rounded-full w-[32px] h-[32px] mr-2 flex items-center justify-center">
								<img
									className="rounded-full w-[75%] h-[75%]"
									src={logo}
								/>
							</div>
							<div className="font-ggMedium text-discord-text-200">
								{user.displayName}
							</div>
						</div>
						<SettingsIcon />
					</div>
				</div>
			</div>
			<div
				id="chat"
				className="bg-discord-main-content-bg text-white flex-grow"
			>
				<div className="h-[48px] drop-shadow-sm border-b-[1px] border-discord-input-dark" />
				<div>User is logged in. Page under construction.</div>
				<button
					onClick={() => dispatch(logout())}
					className="bg-gray-200 h-10"
				>
					LOG OUT
				</button>
			</div>
		</div>
	);
};

export default MainPage;
