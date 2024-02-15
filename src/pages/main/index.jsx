import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import logo from "../../assets/images/logo.png";
import friends from "../../assets/images/friends.svg";
const MainPage = () => {
	const dispatch = useDispatch();
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
					<div className="font-ggMedium text-discord-text-300 w-[221px] h-[42px] bg-[#4e505899] flex items-center pl-[8px] rounded-sm">
						<svg
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill=""
								d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
								className=""
							></path>
							<path
								fill=""
								d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
								className=""
							></path>
						</svg>
						<span className="pl-3">Friends</span>
					</div>
					<div className="absolute bottom-0 text-white h-[52px] bg-discord-profile w-[240px] flex items-center justify-between px-3">
						<div className="flex items-center">
							<div className="bg-black rounded-full w-[32px] h-[32px] mr-2" />
							<div className="font-ggMedium text-discord-text-200">
								User
							</div>
						</div>
						<div className="text-discord-text-200">
							<svg
								aria-hidden="true"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fill="var(--interactive-normal)"
									fillRule="evenodd"
									d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
									clipRule="evenodd"
									className=""
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div
				id="chat"
				className="bg-discord-main-content-bg text-white flex-grow"
			>
				<div className="h-[48px] drop-shadow-sm border-b-[1px] border-discord-input-dark" />
				MAIN
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
