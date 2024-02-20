import ListItems from "./listItem";
import MainSidebar from "./sidebar/MainSidebar";
import ProfileFooter from "./footer/ProfileFooter";

const MainPage = () => {
	return (
		<div className="flex h-screen w-screen min-h-full bg-gray-200">
			<MainSidebar />
			<div className="w-60 bg-discord-sidebar-2">
				<div className="h-12 drop-shadow-xl border-b border-discord-input-dark flex justify-center items-center">
					<div className="font-ggMedium text-discord-text-300 text-sm w-[220px] h-7 px-1.5 py-px bg-discord-input-dark text-center flex items-center rounded-sm">
						Find or start a conversation
					</div>
				</div>
				<div className="flex flex-col items-center pt-2">
					<ListItems />
					<ProfileFooter />
				</div>
			</div>
			<div
				id="chat"
				className="bg-discord-main-content-bg text-white flex-grow"
			>
				<div className="h-12 drop-shadow-sm border-b border-discord-input-dark" />
			</div>
		</div>
	);
};

export default MainPage;
